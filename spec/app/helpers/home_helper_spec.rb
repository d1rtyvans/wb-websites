require 'spec_helper'

RSpec.describe "HomeHelper" do
  subject do
    Class.new { include HomeHelper }
  end

  describe "#responsive_img" do
    it "returns formatted img tag with srcset" do
      result = responsive_img("yag")
      expected = <<-HTML
      <img src="images/yag.jpg" srcset="images/yag.jpg 1x, images/yag@2x.jpg 2x">
HTML

      expect(result.squish).to eq(expected.squish)
    end

    it "can handle nested imgs" do
      result = responsive_img("testimonials/bob")
      expected = <<-HTML
        <img src="images/testimonials/bob.jpg"
             srcset="images/testimonials/bob.jpg 1x, 
                     images/testimonials/bob@2x.jpg 2x">
HTML

      expect(result.squish).to eq(expected.squish)
    end
  end
end
