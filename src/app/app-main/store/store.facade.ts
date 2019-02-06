import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as reducers from '../store/reducers';
import * as selectors from '../store/selectors';
import * as actions from '../store/actions';
import * as models from '../store/models';



@Injectable({ providedIn: 'root' })
export class StoreFacade {
    list$ = this.store.select(selectors.getList);
    filter$ = this.store.select(selectors.getFilterRequest);
    filter:models.BeerFilterRequest;
    favorites$ = this.store.select(selectors.getFavorites);

    constructor(protected store: Store<reducers.State>) {
      //Load first time
      this.filter$.subscribe(x => this.filter = x);
      this.list(this.filter);
    }

    public list(paging: models.BeerFilterRequest) { this.store.dispatch(new actions.List(paging)); }
    public nextPage() {this.filter.page++; this.store.dispatch(new actions.List(this.filter)); }


    public addFavorite(payload: models.Beer) { this.store.dispatch(new actions.AddFavorite(payload)); }
    public removeFavorite(payload: models.Beer) { this.store.dispatch(new actions.RemoveFavorite(payload)); }
}
