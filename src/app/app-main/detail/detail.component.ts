import { Component, OnInit, Input } from '@angular/core';
import * as models from '../store/models';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input()
  public content: models.Beer;

  constructor() { }

  ngOnInit() {
  }

}
