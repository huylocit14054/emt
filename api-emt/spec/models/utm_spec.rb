require 'rails_helper'

RSpec.describe Utm, type: :model do
  fixtures :all
  describe '#standardize_landing_page' do
    it 'add url to rule with "?" if the url dose not contain any ? character yet' do
      url = Utm.standardize_landing_page(url: 'https://redpola.com', rule: 'utm_source=facebook&utm_xml=this_is_input')
      string = 'https://redpola.com?utm_source=facebook&utm_xml=this_is_input'
      expect(url).to eq(string)
    end

    it 'add url to rule with "&" if the url contains ? character' do
      url = Utm.standardize_landing_page(
        url: 'https://redpola.com?search=loc',
        rule: 'utm_source=facebook&utm_xml=this_is_input'
      )
      string = 'https://redpola.com?search=loc&utm_source=facebook&utm_xml=this_is_input'
      expect(url).to eq(string)
    end
  end

  describe '#remove_unused_dimension' do
    it 'remove unsued dimesion fields with blank' do
      url = Utm.remove_unused_dimension(
        rule: 'https://redpola.com?utm_source=facebook&utm_xml=this_is_input&u=FB-{{2}}&y={{3}}'
      )
      string = 'https://redpola.com?utm_source=facebook&utm_xml=this_is_input&u=FB-&y='
      expect(url).to eq(string)
    end
  end

  describe '#subtitute_values_to_rule' do
    let(:attributes) do
      {
        '1' => 'FB',
        '2' => 'GG',
        '3' => 'This+is+my+camp',
        '4' => '',
        'date' => '040717'
      }
    end

    it 'subtitute values of dimensions in rule' do
      rule = 'utm_source={{1}}_{{2}}&utm_camp={{3}}&date={{date}}'
      utm = Utm.subtitute_values_to_rule(attributes: attributes, rule: rule)
      string = 'utm_source=FB_GG&utm_camp=This+is+my+camp&date=040717'
      expect(utm).to eq(string)
    end

    it 'dose not subtitute values of dimensions not in attribute' do
      rule = 'utm_source={{1}}_{{2}}&utm_camp={{3}}_{{5}}&date={{date}}'
      utm = Utm.subtitute_values_to_rule(attributes: attributes, rule: rule)
      string = 'utm_source=FB_GG&utm_camp=This+is+my+camp_{{5}}&date=040717'
      expect(utm).to eq(string)
    end

    it 'subtitute values of dimensions with blank when a value has black in rule' do
      rule = 'utm_source={{1}}_{{2}}&utm_camp={{4}}_{{5}}&date={{date}}'
      utm = Utm.subtitute_values_to_rule(attributes: attributes, rule: rule)
      string = 'utm_source=FB_GG&utm_camp=_{{5}}&date=040717'
      expect(utm).to eq(string)
    end
  end

  describe '#generate_utm_record' do
    let(:rule) { 'utm_source={{1}}_{{2}}&utm_camp={{3}}{{4}}{{5}}&date={{date}}' }

    it 'return utm base on the current rule' do
      values = {
        'url' => 'https://redpola.com',
        '1' => 'FB',
        '2' => 'GG',
        '3' => 'This+is+my+camp',
        '4' => '',
        'date' => '040717'
      }
      utm = Utm.generate_utm_record(
        values: values,
        rule: rule,
        project_member_id: project_members(:member_project_one_1)
      )
      string = 'https://redpola.com?utm_source=FB_GG&utm_camp=This+is+my+camp&date=040717'
      expect(utm.url).to eq(string)
    end

    it 'remove "/" at the end of the url when the user input "/" and generate utm' do
      values = {
        'url' => 'https://redpola.com/',
        '1' => 'FB',
        '2' => 'GG',
        '3' => 'This+is+my+camp',
        '4' => '',
        'date' => '040717'
      }
      utm = Utm.generate_utm_record(
        values: values,
        rule: rule,
        project_member_id: project_members(:member_project_one_1)
      )
      string = 'https://redpola.com?utm_source=FB_GG&utm_camp=This+is+my+camp&date=040717'
      expect(utm.url).to eq(string)
    end

    it 'return the correct utm when the url already have ?q=...' do
      values = {
        'url' => 'https://redpola.com?search=loc',
        '1' => 'FB',
        '2' => 'GG',
        '3' => 'This+is+my+camp',
        '4' => '',
        'date' => '040717'
      }
      utm = Utm.generate_utm_record(
        values: values,
        rule: rule,
        project_member_id: project_members(:member_project_one_1)
      )
      string = 'https://redpola.com?search=loc&utm_source=FB_GG&utm_camp=This+is+my+camp&date=040717'
      expect(utm.url).to eq(string)
    end
  end

  describe '#generate_utms' do
    before(:example) do
      @values = {
        'rule_id' => rules(:rule_one).id,
        'project_id' => projects(:project_one).id,
        'attributes' => [
          {
            'url' => 'https://redpola.com',
            '1' => 'FB',
            '2' => 'GG',
            '3' => 'This+is+my+camp1',
            '4' => '',
            'date' => '040717'
          },
          {
            'url' => 'https://redpola.com/',
            '1' => 'FB',
            '2' => 'GG',
            '3' => 'This+is+my+camp2',
            '4' => '',
            'date' => '040717'
          },
          {
            'url' => 'https://redpola.com?q=loc',
            '1' => 'FB',
            '2' => 'GG',
            '3' => 'This+is+my+camp3',
            '4' => '',
            'date' => '040717'
          }
        ]
      }
    end

    it 'create new utm records and return array of new created utms' do
      utms = Utm.generate_utms(values: @values, current_user_id: users(:loc).id)
      expect(utms.count).to eq(3)
      Utm.delete_all
    end

    it 'create new utm records and return array of new created utms' do
      utms = Utm.generate_utms(values: @values, current_user_id: users(:loc).id)
      utm_strings = []
      utms.each { |utm| utm_strings << utm.url }
      expect(utm_strings.count).to eq(3)
      expect(utm_strings).to contain_exactly(
        'https://redpola.com?q=loc&utm_source=FB_GG&utm_camp=This+is+my+camp3&date=040717',
        'https://redpola.com?utm_source=FB_GG&utm_camp=This+is+my+camp1&date=040717',
        'https://redpola.com?utm_source=FB_GG&utm_camp=This+is+my+camp2&date=040717'
      )
      Utm.delete_all
    end
  end
end
