module Refinery
  module Sponsors
    class SponsorsController < ::ApplicationController

      before_filter :find_all_sponsors
      before_filter :find_page

      def index
        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @sponsor in the line below:
        present(@page)
      end

      def show
        @sponsor = Sponsor.find(params[:id])

        # you can use meta fields from your model instead (e.g. browser_title)
        # by swapping @page for @sponsor in the line below:
        present(@page)
      end

    protected

      def find_all_sponsors
        @sponsors = Sponsor.order('position ASC')
      end

      def find_page
        @page = ::Refinery::Page.where(:link_url => "/sponsors").first
      end

    end
  end
end
