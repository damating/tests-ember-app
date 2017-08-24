class TestSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :duration_in_secs, :start_date, :end_date, :group_id
end
