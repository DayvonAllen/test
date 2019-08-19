import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ga-advanced',
  templateUrl: './ga-advanced.page.html',
  styleUrls: ['./ga-advanced.page.scss'],
})
export class GaAdvancedPage implements OnInit {
  front = false;
  snd;
  characters;
  counter = 0;
  a = [];
  loaded = false;
  list;
  constructor(private getData: DataService) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      console.log(data);
      this.characters = data["characters"];
      this.a = this.characters.slice(46, 51);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }
  flip() {
    this.front = !this.front;
  }
  playSound(){
    this.front = null;
    this.snd = new Audio(`https://hiragana-api.herokuapp.com/sounds/${this.list[0]['romanji']}`)
    this.snd.play()
  }

  next(){
      this.counter++;
      this.list = [this.a[this.counter]];
  }
  back(){
      this.counter--;
      this.list = [this.a[this.counter]];
  }

}
