import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '../store/store.facade';
import { MatExpansionModule } from '@angular/material';
import * as models from '../store/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private facade: StoreFacade) {

   }

  ngOnInit() {
  }

  clearFilter() {
    this.facade.list(new models.BeerFilterRequest());
  }
  onScroll(){
    // console.log('scroll');
    this.facade.nextPage();
  }
}
