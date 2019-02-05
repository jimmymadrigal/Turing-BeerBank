import { Action } from '@ngrx/store';
import * as models from '../models';

export enum BeerActionTypes {
    Exception = '[Beer] Exception',
    List = '[Beer] List Beers',
    ListSuccess = '[Beer] List Beers Success',
    AddFavorite = '[Beer] Add Favorite',
    RemoveFavorite = '[Beer] Remove Favorite',
}

export class List implements Action {
    readonly type = BeerActionTypes.List;
    constructor(public payload: models.BeerFilterRequest) { }
}
export class ListSuccess implements Action {
    readonly type = BeerActionTypes.ListSuccess;
    constructor(public payload: models.Beer[], public request: models.BeerFilterRequest) { }
}
export class AddFavorite implements Action {
    readonly type = BeerActionTypes.AddFavorite;
    constructor(public payload: models.Beer) { }
}
export class RemoveFavorite implements Action {
    readonly type = BeerActionTypes.RemoveFavorite;
    constructor(public payload: models.Beer) { }
}
export class Exception implements Action {
    readonly type = BeerActionTypes.Exception;
    constructor(public payload: any) { }
}

export type BeerActions = Exception
    | List
    | ListSuccess
    | AddFavorite
    | RemoveFavorite
    ;
