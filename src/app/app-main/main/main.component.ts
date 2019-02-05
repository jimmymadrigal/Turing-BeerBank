import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '../store/store.facade';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private store: StoreFacade) {

   }

  ngOnInit() {
  }

}
