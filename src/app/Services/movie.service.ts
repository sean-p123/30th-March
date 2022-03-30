import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) { }

  GetMovieData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=6462cf83&s=%27war%27');
  }
}
