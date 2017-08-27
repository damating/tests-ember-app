import Ember from 'ember';

import Group from '../models/group';
import Test from '../models/test';
import Question from '../models/question';
import QuestionOption from '../models/question-option';

export default Ember.Service.extend({
  getGroupById(id) {
    return groups.findBy('id', id);
  },

  getGroups() {
    return $.ajax({
      type: 'GET',
      url: '/groups',
      dataType: 'json'
    });
  },

  newGroup() {
    return Group.create({ name: '', description: '' })
  },

  saveGroup(group, callback) {
    $.ajax({
      type: 'POST',
      url: '/groups',
      data: { group: JSON.stringify(group) },
      dataType: 'json',
      success: (result) => {
        callback(result["group"]);
      }
    });
  },

  deleteGroup(group, callback) {
    $.ajax({
      type: 'DELETE',
      url: '/groups/' + group.id,
      dataType: 'json',
      success: (result) => {
        callback(group);
      }
    });
  },

  updateGroup(group, callback) {
    $.ajax({
      type: 'PUT',
      url: '/groups/' + group.id,
      data: { group: JSON.stringify(group) },
      dataType: 'json',
      success: (result) => {
        callback();
      }
    });
  },

  getTests(group_id, callback) {
    $.ajax({
      type: 'GET',
      url: '/tests',
      data: { group_id: group_id },
      dataType: 'json',
      success: (tests) => {
        callback(tests);
      }
    });
  },

  deleteTest(test, callback) {
    $.ajax({
      type: 'DELETE',
      url: '/tests/' + test.id,
      dataType: 'json',
      success: (result) => {
        callback(result["test"]);
      }
    });
  },

  newTest(groupId) {
    return Test.create({
      name: '',
      description: '',
      duration_in_secs: '',
      start_date: '2017-08-20T13:45:00',
      end_date: '2017-08-21T13:45:00',
      group_id: groupId,
      questions_attributes: [Question.create({
        text: '',
        question_options_attributes: [
          QuestionOption.create({ answer_text: '', is_correct: false })
        ]
      })]
    })
  },

  getEmptyQuestion() {
    return Question.create({
      text: '',
      question_options_attributes: [ QuestionOption.create({ answer_text: '', is_correct: false }) ]
    })
  },

  getEmptyOption() {
    return QuestionOption.create({ answer_text: '', is_correct: false })
  },

  createTest(test, callback) {
    $.ajax({
      type: 'POST',
      url: '/tests',
      data: { test: JSON.stringify(test) },
      dataType: 'json',
      success: (result) => {
        callback(result["test"]);
      }
    });
  }
});
