import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wa-quiz',
  templateUrl: './wa-quiz.page.html',
  styleUrls: ['./wa-quiz.page.scss'],
})
export class WaQuizPage implements OnInit {

  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  value = 0;
  show = String(this.value);
  results = {
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectHiragana: [],
    count: 0
  }


  constructor(private getData: DataService, private router: Router ) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(43, 46);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }

  choose(choice, answer, hiragana) {
    this.counter++;
    if (this.counter >= this.a.length) {
      this.results['count']++
      if(choice === answer){
        this.results['correct']++;
      }
      else{
        this.results['incorrect']++;
        this.results['incorrectRo'].push(answer);
        this.results['incorrectHiragana'].push(hiragana);
    
      }
      this.value = 1;
      this.show = String(this.value);
      if(this.counter >= 2){
        setTimeout(() => {
          this.getData.getResults().pop();
          this.getData.getResults().push(this.results);
          this.router.navigate(['/home/tabs/basic/result'])
        }, 150);
      }

    } else {
      this.list = [this.a[this.counter]];
      this.value = this.value + 0.2;
      this.show = String(this.value);
      if(choice === answer){
        this.results['correct']++;
      }
      else{
        this.results['incorrect']++;
        this.results['incorrectRo'].push(answer);
        this.results['incorrectHiragana'].push(hiragana);
      }
      this.results['count']++
    }
  }


}
