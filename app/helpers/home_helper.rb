# Helper methods defined here can be accessed in any controller or view in the application

module SsLandingPage
  class App
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

    helpers HomeHelper
  end
end
