
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireData = [
    {
      question: '1. How much do you like learning English?',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question1'
    },
    {
      question: '2. Do you think learning English is worth the effort it takes?',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question2'
    },
    {
      question: '3. Is it important for you to be good at English?',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question3'
    },
    {
      question: '4. How important is it to you to get good grades in English?',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question4'
    },
    {
      question: '5. How useful do you think English would be for your future career?',
      options: ['Not at all', 'Not Much', 'Somewhat', 'Very Much' , 'Extremely'],
      name: 'question5'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
