# Helper methods defined here can be accessed in any controller or view in the application

# module SsLandingPage
  # class App
    module HomeHelper
      def validate_contact_input
        errors = []
        errors << "Name required"    if params[:name].blank?
        errors << "Email required"   if params[:email].blank?
        errors << "Message required" if params[:message].blank?
        flash[:notice] = errors.join(", ")
        errors.empty?
      end
    end

    def responsive_img(name)
      <<-HTML.strip_heredoc
        <img src="images/#{name}.jpg"
             srcset="images/#{name}.jpg 1x,
                     images/#{name}@2x.jpg 2x">
HTML
    end

    SsLandingPage::App.helpers HomeHelper
  # end
# end
