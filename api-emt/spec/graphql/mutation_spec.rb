require 'rails_helper'

RSpec.describe EnhanceUrlTaggingSchema do
  fixtures :all
  let(:context) { { current_user: users(:loc) } }
  let(:variables) do
    {}
  end
  # Call `result` to execute the query
  let(:result) do
    res = EnhanceUrlTaggingSchema.execute(
      query_string,
      context: context,
      variables: variables
    )
    # Print any errors
    pp res if res['errors']
    res
  end

  let(:return_error) do
    message = ''
    result['errors'].each { |e| message += e['message'] }
    message
  end

  describe 'login' do
    let(:query_string) do
      %|
        mutation($username: String!, $password: String!){
          loginUser(input:{username: $username, password: $password}){
            token
            user{
              username
            }
          }
        }
      |
    end

    let(:error) { 'Invalid Username/Password' }
    let(:return_result) { result['data']['loginUser'] }
    context 'when input wrong user name' do
      let(:variables) do
        {
          'username' => 'lot',
          'password' => ''
        }
      end
      it 'raise error' do
        expect(return_error).to eq(error)
      end
    end

    before(:example) do
      users(:loc).update(username: 'locusername', password: '123456')
    end
    context 'when input wrong password' do
      let(:variables) do
        {
          'username' => users(:loc).username,
          'password' => '123457'
        }
      end
      it 'raise error' do
        expect(return_error).to eq(error)
      end
    end

    context 'when input correct password' do
      let(:variables) do
        {
          'username' => 'locusername',
          'password' => '123456'
        }
      end
      it 'return the correct user' do
        expect(return_result['token']).not_to be_nil
        expect(return_result['user']['username']).to eq(users(:loc).username)
      end
    end
  end

  describe 'activate rule' do
    let(:query_string) do
      %|
        mutation($input: ActivateRuleInput!){
          activateRule(input: $input){
            activated
          }
        }
      |
    end
    let!(:project) { projects(:project_one) }
    let(:ids) { project.dimensions.ids }
    let(:new_first_rule) do
      Rule.new(
        rule_string: "utm_source={{#{ids.first}}}-{{#{ids.first}}}&utm_camp={{#{ids.second}}}&date={{date}}",
        project: project
      )
    end

    let(:new_second_rule) do
      Rule.new(
        rule_string: "utm_source={{#{ids.last}}}-{{#{ids.first}}}&utm_camp={{#{ids.second}}}&date={{date}}",
        project: project
      )
    end

    before(:example) do
      rules(:rule_one).destroy
      new_first_rule.save
      new_second_rule.save
    end

    context 'valid id' do
      let(:variables) do
        {
          'input' => {
            'ruleId' => new_first_rule.id.to_s
          }
        }
      end

      it 'is successfully activated' do
        # calling `result` executes the query
        expect(result.dig('data', 'activateRule', 'activated')).to eq(true)
        expect(new_first_rule.reload.is_applied).to eq(true)
        expect(new_second_rule.reload.is_applied).to eq(false)
      end
    end
  end

  describe 'add member to project' do
    let(:query_string) do
      %|
        mutation($input: AddMemberToProjectInput!){
          addMemberToProject(input: $input){
            addedMember {
              id
            }
          }
        }
      |
    end

    context 'when adding a new member' do
      let(:variables) do
        {
          'input' => {
            'companyMemberId' => company_members(:c1_member_phat).id.to_s,
            'projectId' => projects(:project_four).id.to_s,
            'role' => project_members(:member_project_four_2).role
          }
        }
      end
      it 'successfully added' do
        expect(result.dig('data', 'addMemberToProject', 'addedMember', 'id')).not_to be_nil
      end
    end

    context 'when adding a new member that does not has access to UTM service' do
      let(:variables) do
        {
          'input' => {
            'companyMemberId' => company_members(:c1_member_khanh).id.to_s,
            'projectId' => projects(:project_four).id.to_s,
            'role' => project_members(:member_project_four_2).role
          }
        }
      end

      it 'raise error' do
        expect(return_error).to eq(
          "#{company_members(:c1_member_khanh).user.username} doesn't has access in UTM Builder service."
        )
      end
    end

    context 'when adding a new member that is banned by the company' do
      let(:variables) do
        {
          'input' => {
            'companyMemberId' => company_members(:c1_member_phuc).id.to_s,
            'projectId' => projects(:project_four).id.to_s,
            'role' => ProjectMember::ROLE_PROJECT_MEMBER
          }
        }
      end

      it 'raise error' do
        expect(return_error).to eq(
          "#{company_members(:c1_member_phuc).user.username} has been banned by the company admin."
        )
      end
    end

    context 'when adding a member that already has access' do
      let(:variables) do
        {
          'input' => {
            'companyMemberId' => company_members(:c1_member_phat).id.to_s,
            'projectId' => projects(:project_one).id.to_s,
            'role' => ProjectMember::ROLE_PROJECT_MEMBER
          }
        }
      end

      let(:sample_error) { "#{company_members(:c1_member_phat).user.username} already has access." }

      it 'fails in adding member' do
        expect(return_error).to eq(sample_error)
      end
    end
  end

  describe 'assign dimensions for members' do
    let(:query_string) do
      %|
        mutation($input: AssignDimensionsForMembersInput!){
          assignDimensionsForMembers(input: $input)
          {
            assigned
          }
        }
      |
    end

    context 'when assign valid members valid choices' do
      let(:company_members_array) do
        [
          company_members(:c1_member_phat).id.to_s,
          company_members(:c1_member_thuy).id.to_s
        ]
      end
      let(:choices) do
        [
          dimensions(:utm_source_one).id.to_s,
          dimensions(:utm_source_two).id.to_s
        ]
      end

      let(:variables) do
        {
          'input' => {
            'companyMembers' => company_members_array,
            'projectId' => projects(:project_one).id.to_s,
            'choices' => choices
          }
        }
      end

      it 'successfully assigned' do
        expect(result.dig('data', 'assignDimensionsForMembers', 'assigned')).to be(true)
      end
    end
  end

  describe 'change member access right in UTM project' do
    let(:query_string) do
      %|
        mutation($input: ChangeMemberAccessRightInput!){
          changeMemberAccessRight(input: $input)
          {
            updatedAccessRight {
              status
            }
          }
        }
      |
    end

    context 'when changing members access right from active to restricted' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(
              id: project_members(:member_project_one_2).id,
              status: 'restricted'
            )
          }
        }
      end

      it 'no longer have access right' do
        expect(project_members(:member_project_one_2).status).to eq('active')
        expect(result.dig('data', 'changeMemberAccessRight', 'updatedAccessRight', 'status')).to eq('restricted')
        expect(project_members(:member_project_one_2).reload.status).to eq('restricted')
      end
    end

    context 'when changing members access right from restricted to active' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(
              id: project_members(:member_project_one_4).id,
              status: 'active'
            )
          }
        }
      end

      it 'will have access right' do
        expect(project_members(:member_project_one_4).status).to eq('restricted')
        expect(result.dig('data', 'changeMemberAccessRight', 'updatedAccessRight', 'status')).to eq('active')
        expect(project_members(:member_project_one_4).reload.status).to eq('active')
      end
    end
  end

  describe 'create dimension' do
    let(:query_string) do
      %|
        mutation($input: CreateDimensionInput!){
          createDimension(input: $input)
          {
            createdDimension {
              name
              category
            }
          }
        }
      |
    end

    context 'create a new valid dimension' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(
              project_id: projects(:project_one).id,
              name: 'utm source new',
              category: 'selection'
            )
          }
        }
      end

      it 'return valid response' do
        expect(result.dig('data', 'createDimension', 'createdDimension', 'name')).to eq('utm source new')
      end
    end

    context 'create a dimension that already exist in current project' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(
              project_id: projects(:project_one).id,
              name: 'utm source one',
              category: 'selection'
            )
          }
        }
      end

      it 'return error' do
        expect(return_error).to eq('Name has already been taken')
      end
    end
  end

  describe 'create options' do
    let(:query_string) do
      %|
        mutation($input: CreateOptionsInput!){
          createOptions(input: $input)
          {
            createdOptions {
              name
            }
          }
        }
      |
    end

    context 'when add valid options' do
      let(:variables) do
        {
          'input' => {
            dimensionId: dimensions(:utm_source_one).id,
            names: [options(:option_1).name]
          }
        }
      end

      it 'successfully created' do
        expect(result.dig('data', 'createOptions', 'createdOptions')[0]['name']).to eq('option one')
      end
    end
  end

  describe 'create project' do
    let(:query_string) do
      %|
        mutation($input: CreateProjectInput!){
          createProject(input: $input)
          {
            createdProject {
              name
            }
          }
        }
      |
    end

    context 'when create a new valid project' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(company_id: companies(:company_one).id,
                                      name: 'enhance',
                                      description: 'hello anh Phuc')
          }
        }
      end

      it 'successfully created' do
        expect(result.dig('data', 'createProject', 'createdProject', 'name')).to eq('enhance')
      end
    end

    context 'when create a UTM project that company already has' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(company_id: companies(:company_one).id,
                                      name: projects(:project_one).name,
                                      description: 'hello anh Phuc')
          }
        }
      end

      it 'will return error' do
        expect(return_error).to eq('Name has already been taken')
      end
    end
  end

  describe 'create rule' do
    let(:query_string) do
      %|
        mutation($input: CreateRuleInput!){
          createRule(input: $input)
          {
            createdRule {
              ruleString
            }
          }
        }
      |
    end

    let!(:project) { projects(:project_one) }
    let(:ids) { project.dimensions.ids }
    let(:new_first_rule) do
      Rule.new(
        rule_string: "utm_source={{#{ids.first}}}-{{#{ids.first}}}&utm_camp={{#{ids.second}}}&date={{date}}",
        project: project
      )
    end

    before(:example) do
      new_first_rule.save
    end

    context 'when create a new valid rule' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(project_id: projects(:project_one).id,
                                      rule_string: "source={{#{dimensions(:utm_source_one).id}}}")
          }
        }
      end
      it 'successfully created' do
        expect(result.dig('data', 'createRule', 'createdRule', 'ruleString')).to eq(
          "source={{#{dimensions(:utm_source_one).id}}}"
        )
      end
    end

    context 'when create a rule that project already has' do
      let(:variables) do
        {
          'input' => {
            'attributes' => JSON.dump(project_id: projects(:project_one).id,
                                      rule_string: new_first_rule.rule_string)
          }
        }
      end

      it 'will return error' do
        expect(return_error).to eq('Rule string has already been taken')
      end
    end
  end

  describe 'add member to company' do
    let(:query_string) do
      %|
        mutation($input: AddMemberToCompanyInput!){
          addMemberToCompany(input: $input)
          {
            addedMember {
              user {
                email
              }
              company {
                name
              }
            }
          }
        }
      |
    end

    context 'add valid member' do
      let(:variables) do
        {
          'input' => {
            'companyId' => companies(:company_three).id.to_s,
            'email' => users(:loc).email,
            'roles' => []
          }
        }
      end

      it 'successfully added' do
        expect(result.dig('data', 'addMemberToCompany', 'addedMember')).not_to be_nil
      end
    end

    context 'add a member that already has access' do
      let(:variables) do
        {
          'input' => {
            'companyId' => companies(:company_one).id,
            'email' => users(:loc).email,
            'roles' => []
          }
        }
      end

      it 'return errors' do
        expect(return_error).to eq('User has already been taken')
      end
    end

    context 'add a member in company that does not exist' do
      let(:variables) do
        {
          'input' => {
            'companyId' => companies(:company_one).id + 100,
            'email' => users(:loc).email,
            'roles' => []
          }
        }
      end

      it 'return errors' do
        expect(return_error).to eq('Company must exist')
      end
    end
  end

  describe 'create company' do
    let(:query_string) do
      %|
        mutation createCompany($input: CreateCompanyInput!){
          createCompany(input: $input)
          {
            createdCompany {
              name
              plan {
                id
              }
            }
          }
        }
      |
    end

    context 'with valid arguments' do
      let(:variables) do
        {
          'input' => {
            'name' => 'Enhance',
            'companyAdminEmail' => 'enhance_admin@gmail.com',
            'planId' => plans(:plan_three).id.to_s
          }
        }
      end

      it 'creates new company' do
        expect(result.dig('data', 'createCompany', 'createdCompany', 'name')).to eq('Enhance')
      end

      it 'assigns correct plan for that company ' do
        expect(result.dig('data', 'createCompany', 'createdCompany', 'plan', 'id')).to eq(plans(:plan_three).id.to_s)
      end
    end
  end

  describe 'activate company member' do
    let(:query_string) do
      %|
        mutation changeCompanyMemberStatus($input: ChangeCompanyMemberStatusInput!){
          changeCompanyMemberStatus(input: $input)
          {
            affectedCompanyMember {
              id
              status
              user {
                username
              }
            }
          }
        }
      |
    end

    context 'with valid arguments' do
      let(:variables) do
        {
          'input' => {
            'companyMemberId' => company_members(:c1_member_khanh).id,
            'status' => 'pending'
          }
        }
      end

      it 'successful update status' do
        expect(result.dig('data', 'changeCompanyMemberStatus', 'affectedCompanyMember', 'status')).to eq('pending')
      end
    end
  end

  describe 'updateCompany' do
    let(:query_string) do
      %|
        mutation updateCompany($input: UpdateCompanyInput!){
          updateCompany(input: $input)
          {
            updatedCompany {
              name
              plan {
                name
              }
              status
            }
          }
        }
        |
    end
    let(:variables) do
      {
        'input' => {
          'attributes' => JSON.dump(
            'id' => companies(:company_one).id.to_s,
            'name' => 'company_one_edited',
            'plan_id' => plans(:plan_two).id.to_s,
            'status' => Company::STATUS_RESTRICTED
          )
        }
      }
    end
    it 'return correct edited company name' do
      expect(result.dig('data', 'updateCompany', 'updatedCompany', 'name')).to eq('company_one_edited')
    end

    it 'return correct edited plan name' do
      expect(result.dig('data', 'updateCompany', 'updatedCompany', 'plan', 'name')).to eq('Standard OMS')
    end

    it 'return correct edited status' do
      expect(result.dig('data', 'updateCompany', 'updatedCompany', 'status')).to eq(Company::STATUS_RESTRICTED)
    end

    it 'update attirbutes in database' do
      expect { result }.to change { companies(:company_one).reload.name }.from('company_one').to('company_one_edited')
    end
  end

  describe 'create_service' do
    let(:query_string) do
      %|
        mutation($input: CreateServiceInput!){
          createService(input: $input){
            createdService{
              id
              name
              description
            }
          }
        }
      |
    end

    context 'valid input' do
      let(:variables) do
        {
          'input' => {
            'attributes' =>  JSON.dump(
              'name' => 'new service',
              'description' => 'this is my new service'
            )
          }
        }
      end

      it 'create new service' do
        expect(result['data']['createService']['createdService']['name']).to eq('new service')
      end
    end

    context 'invalid input' do
      let(:variables) do
        {
          'input' => {
            'attributes' =>  JSON.dump(
              'name' => services(:utm).name,
              'description' => 'this is my new service'
            )
          }
        }
      end
      it 'raise error when create a service with the same name' do
        expect(result['errors'][0]['message']).to eq('Name has already been taken')
      end
    end
  end

  describe 'update_service' do
    let(:query_string) do
      %|
        mutation($input: UpdateServiceInput!){
          updateService(input: $input){
            updatedService{
              id
              name
              description
            }
          }
        }
      |
    end

    context 'valid input' do
      let(:variables) do
        {
          'input' => {
            'attributes' =>  JSON.dump(
              'id' => services(:utm).id.to_s,
              'name' => 'new service',
              'description' => 'this is my new service'
            )
          }
        }
      end

      it 'create new service' do
        expect(result['data']['updateService']['updatedService']['name']).to eq('new service')
      end
    end

    context 'invalid input' do
      let(:variables) do
        {
          'input' => {
            'attributes' =>  JSON.dump(
              'id' => services(:utm).id.to_s,
              'name' => services(:oms).name,
              'description' => 'this is my new service'
            )
          }
        }
      end
      it 'raise error when create a service with the same name' do
        expect(result['errors'][0]['message']).to eq('Name has already been taken')
      end
    end
  end

  describe 'delete_service' do
    let(:query_string) do
      %|mutation($input: DeleteServiceInput!) {
        deteleService(input: $input) {
          deleted
        }
      }|
    end
    let(:variables) do
      {
        'input' => {
          'serviceId' => services(:utm).id
        }
      }
    end

    it 'delete utm service and all the dependency' do
      expect(Service.find(services(:utm).id)).not_to be_nil
      expect(PlanService.find(plan_services(:plan_one_utm).id)).not_to be_nil
      expect(PlanService.find(plan_services(:plan_three_utm).id)).not_to be_nil
      expect(result['data']['deteleService']['deleted']).to be(true)
      expect { Service.find(services(:utm).id) }.to raise_error
      expect { PlanService.find(plan_services(:plan_one_utm).id) }.to raise_error
      expect { PlanService.find(plan_services(:plan_three_utm).id) }.to raise_error
    end
  end

  describe 'create_plan' do
    let(:query_string) do
      %|mutation($input: CreatePlanInput!) {
        createPlan(input: $input) {
          createdPlan{
            id
            name
            description
          }
        }
      }|
    end

    let(:variables) do
      {
        'input' => {
          'name' => 'my new plan',
          'description' => 'this is my new plan',
          'serviceIds' => [services(:utm).id.to_s, services(:oms).id.to_s]
        }
      }
    end

    it 'return new created plan' do
      expect(result['data']['createPlan']['createdPlan']['name']).to eq('my new plan')
      expect(result['data']['createPlan']['createdPlan']['description']).to eq('this is my new plan')
    end

    it 'create new plan' do
      expect { result }.to change { Plan.count }.by(1)
    end

    it 'create new plan_service' do
      expect { result }.to change { PlanService.count }.by(2)
    end
  end

  describe 'update_plan' do
    let(:query_string) do
      %|mutation($input: UpdatePlanInput!) {
        updatePlan(input: $input) {
          updatedPlan{
            id
            name
            services{
              id
              name
            }
          }
        }
      }|
    end
    let(:variables) do
      {
        'input' => {
          'planId' => plans(:plan_one).id.to_s,
          'name' => 'myplan',
          'description' => 'this is my new plan',
          'serviceIds' => [services(:utm).id.to_s, services(:oms).id.to_s]
        }
      }
    end
    it 'return updated plan' do
      expect(result['data']['updatePlan']['updatedPlan']['name']).to eq('myplan')
    end

    it 'return 2 created plan_services' do
      expect(result['data']['updatePlan']['updatedPlan']['services'].count).to eq(2)
    end
  end
end
