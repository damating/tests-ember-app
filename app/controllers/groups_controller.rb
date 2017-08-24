class GroupsController < ApplicationController
  def index
    render json: Group.all.order(:name)
  end

  def create
    group = Group.new
    group.save

    render json: group
  end

  def destroy
    render json: Group.destroy(params[:id])
  end

  def update
    group = Group.find(params["id"])
    group.update_attributes(group_params)
    render json: group
  end

  private

  def group_params
    params[:group] = JSON.parse(params[:group])
    params.require(:group).permit(:id, :name, :description)
  end
end
