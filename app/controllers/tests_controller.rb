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

  def show
    test = Test.find(params[:id]).as_json(include: {
                                            questions:
                                            {
                                              include: { question_options: { only: [:id, :answer_text] } },
                                              only: [:id, :text]
                                            }
                                          }, only: [:id, :name, :duration_in_secs] )

    render json: test
  end

  def destroy
    render json: Test.destroy(params[:id])
  end

  def calculate
    render json: { success: false } if params[:test].nil?

    params[:test] = JSON.parse(params[:test])
    test = Test.find(params[:test][:id])
    check_hash = test.questions.map { |q| [q.id, q.question_options.map { |o| [o.id, o.is_correct] }.to_h ] }.to_h

    count = 0
    params[:test][:questions].each do |question|
      correct_options = check_hash[question[:id]]
      answers = question[:question_options].map { |o| [o[:id], o[:is_correct] || o[:is_correct] != nil] }.to_h
      count += 1 if correct_options == answers
    end

    render json: { points: count }
  end

  private

  def test_params
    params[:test] = JSON.parse(params[:test])
    params.require(:test).permit(:id, :name, :description, :duration_in_secs, :start_date, :end_date, :group_id,
                                 questions_attributes: [:id, :text, :test_id,
                                 question_options_attributes: [:id, :answer_text, :is_correct, :question_id]])
  end
end
