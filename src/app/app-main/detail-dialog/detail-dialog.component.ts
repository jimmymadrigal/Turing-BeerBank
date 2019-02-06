import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { StoreFacade } from '../store/store.facade';
import * as models from '../store/models';

@Component({
  selector: 'app-detail-dialog',
  templateUrl: './detail-dialog.component.html',
  styleUrls: ['./detail-dialog.component.scss']
})
export class DetailDialogComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  constructor(public dialogRef: MatDialogRef<DetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public content: models.Beer, private facade: StoreFacade, public dialog: MatDialog) {
    //dialogRef.disableClose = true;
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    for (var subscription of this.subscriptions) subscription.unsubscribe();
  }
  close() {
    this.dialogRef.close();
  }

}
