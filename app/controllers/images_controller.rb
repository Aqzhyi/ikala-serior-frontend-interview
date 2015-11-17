class ImagesController < ApplicationController
  def index
    respond_to do |format|
      format.json {
        render :json => [
          {"url": "https://placehold.it/200x200&text=imgA"},
          {"url": "https://placehold.it/200x200&text=imgB"},
          {"url": "https://placehold.it/200x200&text=imgC"},
          {"url": "https://placehold.it/200x200&text=imgD"}
        ]
      }
    end
  end

  def create
    respond_to do |format|
      format.json {
        render :json => {"url": params[:data], "data": params[:data]}
      }
    end
  end
end
