module SeoHelper
  def yield_meta_description
    if content_for?(:meta_description)
      yield_content :meta_description
    else
      fail StandardError, "Each page needs a unique meta description for SEO purposes"
    end
  end
end

SsLandingPage::App.helpers SeoHelper
