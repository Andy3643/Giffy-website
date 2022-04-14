import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifserviceService {
BASE_URL="api.giphy.com/v1/gifs/trending"
constructor(private http:HttpClient) {}

  getGifs():Observable<any>{
    return this.http.get<any>(this.BASE_URL)
    }
  
}
  



