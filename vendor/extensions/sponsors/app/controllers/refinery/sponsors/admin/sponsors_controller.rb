module Refinery
  module Sponsors
    module Admin
      class SponsorsController < ::Refinery::AdminController

        crudify :'refinery/sponsors/sponsor',
                :xhr_paging => true

      end
    end
  end
end
