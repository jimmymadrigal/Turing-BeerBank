import { Component, OnInit, Input } from '@angular/core';
import * as models from '../store/models'
import { StoreFacade } from '../store/store.facade';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() content: models.Beer;
  constructor(private facade: StoreFacade) { }

  ngOnInit() {
  }

  toggleFavorite() {
    if (this.content.favorite)
      this.facade.removeFavorite(this.content);
    else
      this.facade.addFavorite(this.content);

  }

}
