import Ember from 'ember';

import Group from '../models/group';
import Test from '../models/test';
import Question from '../models/question';
import QuestionOption from '../models/question-option';

const groups = [
  Group.create({ id: '1', name: 'Grupa1', description: 'Opis grupy 1' }),
  Group.create({ id: '2', name: 'Grupa2', description: 'Opis grupy 2' })
];

// const tests = [
//   { id: '1', name: 'Grupa1', group_id: '1' },
//   { id: '2', name: 'Grupa2', group_id: '1' }
// ];

const tests = [
  Test.create({
    id: '1',
    name: 'Test1',
    group_id: '1',
    questions: [
      Question.create({
        id: '1',
        text: 'Pytanie1',
        question_options: [
          QuestionOption.create({ id: '1', answer_text: 'Odp1', is_correct: true }),
          QuestionOption.create({ id: '2', answer_text: 'Odp2', is_correct: false })
        ]
      }),
      Question.create({
        id: '2',
        text: 'Pytanie2',
        question_options: [
          QuestionOption.create({ id: '3', answer_text: 'Odp1', is_correct: false }),
          QuestionOption.create({ id: '4', answer_text: 'Odp2', is_correct: true })
        ]
      })
    ]
  }),
  Test.create({
    id: '2',
    name: 'Test2',
    group_id: '1',
    questions: [
      Question.create({
        id: '3',
        text: 'Pytanie1',
        question_options: [
          QuestionOption.create({ id: '5', answer_text: 'Odp1', is_correct: false }),
          QuestionOption.create({ id: '6', answer_text: 'Odp2', is_correct: true })
        ]
      }),
      Question.create({
        id: '4',
        text: 'Pytanie2',
        question_options: [
          QuestionOption.create({ id: '7', answer_text: 'Odp1', is_correct: true }),
          QuestionOption.create({ id: '8', answer_text: 'Odp2', is_correct: false })
        ]
      })
    ]
  })
];

export default Ember.Service.extend({
  getGroupById(id) {
    return groups.findBy('id', id);
  },

  getGroups() { return groups; },

  newGroup() {
    return Group.create({ name: '', description: '' })
  },

  saveGroup(group) {
    // TODO ajax here!
    group.set('id', 9999);
    groups.pushObject(group);
  },

  deleteGroup(group) {
    groups.popObject(group);
  },

  updateGroup(group) {
    // TODO ajax
  },

  getTests(group_id) {
    return tests.filterBy('group_id', group_id);
  },

  deleteTest(test) {
    // TODO ajax
    tests.popObject(test);
  },

  newTest() {
    return Test.create({
      name: '',
      description: '',
      duration_in_secs: '',
      questions: [Question.create({
        text: '',
        question_options: [
          QuestionOption.create({ answer_text: '', is_correct: false })
        ]
      })]
    })
  },
});
