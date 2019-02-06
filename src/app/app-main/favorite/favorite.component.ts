import { Component, OnInit, OnDestroy } from '@angular/core';
import { StoreFacade } from '../store/store.facade';
import { MatDialog } from '@angular/material';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import * as models from '../store/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  list$ = this.facade.favorites$;

  constructor(private facade: StoreFacade, public dialog: MatDialog) { }

  ngOnInit() {
  }

  open(element: models.Beer) {
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      width: '600px',
      position: {top: '70px'},
      data: element
    });

    dialogRef.afterClosed().subscribe(() => {
    });
  }
}
