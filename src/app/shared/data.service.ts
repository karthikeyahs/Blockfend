import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  signupURL = '/signup';
  isValid = '';
  getRequests(blocksURL) {
    return this.http.get(blocksURL);
  }

  signup(formData){
    this.http.post(this.signupURL,formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
