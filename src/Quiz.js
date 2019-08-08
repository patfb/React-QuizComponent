import React, { Component } from "react";
import quizData from "./quiz_data.json";
import QuizQuestion from "./QuizQuestion";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  render() {
    return (
      <QuizQuestion
        quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
      />
    );
  }
}
export default Quiz;
