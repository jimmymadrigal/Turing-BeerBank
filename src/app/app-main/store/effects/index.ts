import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as actions from '../actions';
import * as models from '../models';
import { AppService } from '../../services/app.service';


@Injectable()
export class BeerEffects {

    @Effect()
    list$: Observable<Action> = this.actions$.pipe(
        ofType(actions.BeerActionTypes.List),
        switchMap((action: actions.List) => this.service.list(action.payload)
                .pipe(map((response: models.Beer[]) => new actions.ListSuccess(response, action.payload)),
                catchError((error) => of(new actions.Exception(error))))
        )
    );

    constructor(private actions$: Actions, private service: AppService) { }
}
