import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

// formatQuestion({ optionOneText, optionTwoText, author })

export function addNewQuestion(question) {
  return _saveQuestion(question);
}

//{ authedUser, qid, answer }
export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}
