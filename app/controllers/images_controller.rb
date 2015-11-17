class ImagesController < ApplicationController
  def index
    respond_to do |format|
      format.json {
        render text: '
          [
            "https://placehold.it/200x200&text=imgA",
            "https://placehold.it/200x200&text=imgB",
            "https://placehold.it/200x200&text=imgC",
            "https://placehold.it/200x200&text=imgD"
          ]
        '
      }
    end
  end

  def create
    respond_to do |format|
      format.json {
        render text: '
          [
            "https://placehold.it/200x200&text=imgA",
            "https://placehold.it/200x200&text=imgB",
            "https://placehold.it/200x200&text=imgC",
            "https://placehold.it/200x200&text=imgD",
            "https://placehold.it/200x200&text=uploaded"
          ]
        '
      }
    end
  end
end
