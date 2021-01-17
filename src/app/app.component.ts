import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Create a joke';
  jokes = [
    {
      question: 'Why do we here, on Earth?',
      answer: 'There is green grass in Summer.',
      showAnswer: false,
    },
    {
      question: 'Is life beautiful?',
      answer: 'Depends on which side you look at...',
      showAnswer: false,
    },
    {
      question: 'Are cats weird?',
      answer: 'They are. Very weird.',
      showAnswer: false,
    },
  ];
  newQuestion = '';
  newAnswer = '';

  inputsHandler() {
    if (this.newAnswer && this.newQuestion) {
      this.jokes.unshift({
        question: this.newQuestion,
        answer: this.newAnswer,
        showAnswer: false,
      });
      this.newQuestion = '';
      this.newAnswer = '';
    }
  }
  deleteHandler(i: number) {
    this.jokes.splice(i, 1);
  }

  showhandler(i: number) {
    this.jokes[i].showAnswer = !this.jokes[i].showAnswer;
  }
}
