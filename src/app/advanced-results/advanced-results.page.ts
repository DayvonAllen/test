import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advanced-results',
  templateUrl: './advanced-results.page.html',
  styleUrls: ['./advanced-results.page.scss'],
})
export class AdvancedResultsPage implements OnInit {

  results;
  constructor(private getResults: DataService, private router: Router) { }

  ngOnInit() {
    this.results = this.getResults.getAdvancedResults();
    if(this.results[0]['count'] === 0){
      this.router.navigate(['home/tabs/advanced']);
    }
  }

}
