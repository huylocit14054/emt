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
        rule: 'https://redpola.com?utm_source=facebook&utm_xml=this_is_input&u=FB-<<2>>&y=<<3>>'
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
      rule = 'utm_source=<<1>>_<<2>>&utm_camp=<<3>>&date=<<date>>'
      utm = Utm.subtitute_values_to_rule(attributes: attributes, rule: rule)
      string = 'utm_source=FB_GG&utm_camp=This+is+my+camp&date=040717'
      expect(utm).to eq(string)
    end

    it 'dose not subtitute values of dimensions not in attribute' do
      rule = 'utm_source=<<1>>_<<2>>&utm_camp=<<3>>_<<5>>&date=<<date>>'
      utm = Utm.subtitute_values_to_rule(attributes: attributes, rule: rule)
      string = 'utm_source=FB_GG&utm_camp=This+is+my+camp_<<5>>&date=040717'
      expect(utm).to eq(string)
    end

    it 'subtitute values of dimensions with blank when a value has black in rule' do
      rule = 'utm_source=<<1>>_<<2>>&utm_camp=<<4>>_<<5>>&date=<<date>>'
      utm = Utm.subtitute_values_to_rule(attributes: attributes, rule: rule)
      string = 'utm_source=FB_GG&utm_camp=_<<5>>&date=040717'
      expect(utm).to eq(string)
    end
  end
end
