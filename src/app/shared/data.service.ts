import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  blocksURL = '/blocks';

  getData() {
    return this.http.get(this.blocksURL);
  }
}
