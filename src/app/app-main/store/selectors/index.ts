import * as fromFeatureState from '../reducers';
import * as fromBeer from '../reducers/beer.reducer';
import { createSelector } from '@ngrx/store';

export const getList = createSelector(fromFeatureState.selectBeerState, fromBeer.getList);
export const getFilterRequest = createSelector(fromFeatureState.selectBeerState, fromBeer.getFilterRequest);
export const getFavorites = createSelector(fromFeatureState.selectBeerState, fromBeer.getFavorites);
