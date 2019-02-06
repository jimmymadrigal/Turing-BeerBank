import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as models from '../store/models';

@Injectable()
export class AppService {

  protected urlPrefix: string = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  // Rest Items Service: Read all REST Items
  list(filter: models.BeerFilterRequest) {
    var url = this.urlPrefix;
    if (filter) {
      url += '?per_page=80&';
      if (filter.search)
        url += "beer_name=" + encodeURIComponent("" + filter.search) + "&";
      if (filter.advanced) {
        if (filter.minABV !== null)
          url += "abv_gt=" + encodeURIComponent("" + filter.minABV) + "&";
        if (filter.maxABV !== null)
          url += "abv_lt=" + encodeURIComponent("" + filter.maxABV) + "&";
        if (filter.minIBU !== null)
          url += "ibu_gt=" + encodeURIComponent("" + filter.minIBU) + "&";
        if (filter.maxIBU !== null)
          url += "ibu_lt=" + encodeURIComponent("" + filter.maxIBU) + "&";
        if (filter.brewedBefore !== null)
          url += "brewed_before=" + encodeURIComponent(filter.brewedBefore ? "" + filter.brewedBefore.getMonth()+"-"+ filter.brewedBefore.getFullYear() : "") + "&";
        if (filter.brewedAfter !== null)
          url += "brewed_after=" + encodeURIComponent(filter.brewedAfter ? "" + filter.brewedAfter.getMonth()+"-"+ filter.brewedAfter.getFullYear() : "") + "&";
      }

    }
    return this.http
      .get<any[]>(url)
      .pipe(map(data => data.map(x => Object.assign(new models.Beer(), x))));
  }

}
