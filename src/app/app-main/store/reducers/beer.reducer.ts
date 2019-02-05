import { Action } from '@ngrx/store';
import * as actions from '../actions';
import * as models from '../models';


export interface State {
  filterRequest?: models.BeerFilterRequest,
  list?: models.Beer[],
  favorites?: models.Beer[],
}

export const initialState: State = {
  filterRequest: new models.BeerFilterRequest(),
  list: [],
  favorites: [],
};

export function reducer(state = initialState, action: actions.BeerActions): State {
  switch (action.type) {

    case actions.BeerActionTypes.ListSuccess:
      var list = action.payload;
      // Refresh favorites with list objects
      var favorites = state.favorites.map(x=>{
        var exists = list.filter(y=>y.id==x.id);
        if (exists.length == 0) {
          return x;
        }
        exists[0].favorite = true;
        return exists[0];
      });
      return {
        ...state,
        filterRequest: action.request,
        list: action.payload,
        favorites: favorites
      };
    case actions.BeerActionTypes.AddFavorite:
      var list = state.list;
      var favorites = state.favorites;
      var exists = favorites.filter(x => x.id == action.payload.id);
      action.payload.favorite = true;
      console.log(favorites);
      if (exists.length == 0) {
        favorites.push(action.payload);
      }
      return {
        ...state,
        list: list,
        favorites: favorites
      };
    case actions.BeerActionTypes.RemoveFavorite:
      var list = state.list;
      var favorites = state.favorites;
      var exists = favorites.filter(x => x.id == action.payload.id);
      action.payload.favorite = false;
      favorites = favorites.filter(x => x.id != action.payload.id);
      return {
        ...state,
        list: list,
        favorites: favorites
      };
    default:
      return state;
  }
}

export const getList = (state: State) => state.list;
export const getFavorites = (state: State) => state.favorites;
export const getFilterRequest = (state: State) => state.filterRequest;

