class CompanyMemberMailer < ApplicationMailer
  def company_member_activation(user)
    @user = user
    mail(to: @user.email, subject: 'Welcome to EMT')
  end
end
