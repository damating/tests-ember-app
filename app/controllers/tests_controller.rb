class TestsController < ApplicationController
  def index
    render json: Test.where(group_id: params[:group_id]).order(:name)
  end

  def create
    test = Test.new(test_params)
    test.duration_in_secs *= 60
    test.save

    render json: test
  end

  def destroy
    render json: Test.destroy(params[:id])
  end

  private

  def test_params
    params[:test] = JSON.parse(params[:test])
    params.require(:test).permit(:id, :name, :description, :duration_in_secs, :start_date, :end_date, :group_id,
                                 questions_attributes: [:id, :text, :test_id,
                                 question_options_attributes: [:id, :answer_text, :is_correct, :question_id]])
  end
end
