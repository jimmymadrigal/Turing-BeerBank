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
      var list = state.list;
      if (action.request.page == 1) list = action.payload;
      else list= list.concat(action.payload);
      //list = action.payload;
      // Assign similar considering on who is next in list
      for (let i = 0; i < list.length; i++) {
        list[i].similar = [];
        if (i - 1 >= 0) list[i].similar.push(list[i - 1]);
        if (i + 1 < list.length) list[i].similar.push(list[i + 1]);
        if (i + 2 < list.length) list[i].similar.push(list[i + 2]);

      }
      // Refresh favorites with list objects
      var favorites = state.favorites.map(x => {
        var exists = list.filter(y => y.id == x.id);
        if (exists.length == 0) {
          return x;
        }
        exists[0].favorite = true;
        return exists[0];
      });
      return {
        ...state,
        filterRequest: action.request,
        list: list,
        favorites: favorites
      };


    case actions.BeerActionTypes.AddFavorite:
      var list = state.list;
      var favorites = state.favorites;
      var exists = favorites.filter(x => x.id == action.payload.id);
      action.payload.favorite = true;
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


    case actions.BeerActionTypes.Exception:
      console.log(action.payload);
      if (typeof action.payload == 'string')
        alert(action.payload);
      else if (action.payload && action.payload.message)
        alert(action.payload.message);
      else
        return state;
    default:
      return state;
  }
}

export const getList = (state: State) => state.list;
export const getFavorites = (state: State) => state.favorites;
export const getFilterRequest = (state: State) => state.filterRequest;

