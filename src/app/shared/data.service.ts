import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getRequests(blocksURL) {
    return this.http.get(blocksURL);
  }

  postData(URL:string,formData){
    this.http.post(URL,formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
