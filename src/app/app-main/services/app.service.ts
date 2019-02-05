import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as models from '../store/models';

@Injectable()
export class AppService {

  protected urlPrefix : string = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  // Rest Items Service: Read all REST Items
  list(filter:models.BeerFilterRequest) {
    var url = this.urlPrefix;
    if(filter){
      if(filter.search)
        url += '?beer_name='+filter.search;
    }
    return this.http
      .get<any[]>(url)
      .pipe(map(data => data.map(x=> Object.assign(new models.Beer(), x))));
  }

}
