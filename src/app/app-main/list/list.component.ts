import { Component, OnInit } from '@angular/core';
import { StoreFacade } from '../store/store.facade';
import { MatDialog } from '@angular/material';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';
import * as models from '../store/models';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$ = this.facade.list$;

  constructor(private facade: StoreFacade, public dialog: MatDialog, public overlay: Overlay) { }

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
