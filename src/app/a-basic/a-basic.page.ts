import { Component, OnInit } from "@angular/core";
import { DataService } from '../data.service';

@Component({
  selector: "app-a-basic",
  templateUrl: "./a-basic.page.html",
  styleUrls: ["./a-basic.page.scss"]
})
export class ABasicPage implements OnInit {
  front = false;
  snd;
  characters;
  counter = 0;
  a = [];
  sound;
  loaded = false;
  list;
  constructor(private getData: DataService) {}

  ngOnInit() {
    this.getData.getAllData().subscribe(data => {
      this.characters = data;
      this.a = this.characters.slice(0, 5);
      this.list = [this.a[0]];
      this.loaded = true;
    });
  }
  flip() {
    this.front = !this.front;
  }
  playSound(){
    this.front = null;
    this.snd = new Audio(`../../assets/${this.list[0]['romanji']}(hiragana).mp3`)    
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
