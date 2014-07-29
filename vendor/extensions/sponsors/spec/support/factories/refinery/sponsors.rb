
FactoryGirl.define do
  factory :sponsor, :class => Refinery::Sponsors::Sponsor do
    sequence(:title) { |n| "refinery#{n}" }
  end
end

