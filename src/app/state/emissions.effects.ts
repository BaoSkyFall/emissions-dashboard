import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EmissionsService } from './emissions.service';
import * as EmissionsActions from './emissions.actions';

@Injectable()
export class EmissionsEffects {
  loadEmissions$ = createEffect(() => this.actions$.pipe(
    ofType(EmissionsActions.loadEmissions),
    mergeMap(action => this.emissionsService.getEmissionsData(action.year)
      .pipe(
        map(emissions => EmissionsActions.loadEmissionsSuccess({ emissions })),
        catchError(error => of(EmissionsActions.loadEmissionsFailure({ error })))
      ))
  ));

  constructor(
    private actions$: Actions,
    private emissionsService: EmissionsService
  ) {}
}
