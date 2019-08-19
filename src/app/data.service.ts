import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  results = [{
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectHiragana: [],
    count: 0
  }];
  advancedResults = [{
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectHiragana: [],
    count: 0
  }];

  getAllData(){
    return this.http.get("https://hiragana-api.herokuapp.com/basic")
  }
  
  getAdvancedResults(){
    return this.advancedResults;
  }
  getResults(){
    return this.results;
  }

}
