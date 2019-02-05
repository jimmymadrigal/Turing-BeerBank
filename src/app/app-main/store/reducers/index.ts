import * as fromBeer from './beer.reducer';

import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

export interface State {
  beer: fromBeer.State;
}

export const reducers: ActionReducerMap<State> = {
  beer: fromBeer.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const selectBeerState = createFeatureSelector<fromBeer.State>('beer');
