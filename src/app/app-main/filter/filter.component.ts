import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as models from '../store/models';
import { Subject, Subscription } from 'rxjs';
import { StoreFacade } from '../store/store.facade';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  advanced = false;
  formEdit: FormGroup;
  filter: models.BeerFilterRequest;
  searchTextChanged = new Subject<string>();
  private subscriptions: Subscription[] = [];

  constructor(private facade: StoreFacade, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
      this.subscriptions.push(this.facade.filter$.subscribe(filter => {
          if (filter) {
              this.filter = filter;
              this.createForm();
              //this.applySearch();
          }
      }));
  }
  createForm(): void {
      this.formEdit = this.formBuilder.group(this.filter);
      this.formEdit.valueChanges.pipe(debounceTime(1000)).subscribe(_ => this.applySearch());
  }

  ngOnDestroy() {
      for (var subscription of this.subscriptions) subscription.unsubscribe();
  }

  applySearch() {
      this.filter = Object.assign(new models.BeerFilterRequest(), {...this.formEdit.value, advanced:this.advanced });
      this.filter.page=1; // always start on 1
      this.facade.list(this.filter);
  }

}
