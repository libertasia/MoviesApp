/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getTopRatedMovies(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/popular?page=${page}&api_key=${environment.apiKey}`
    );
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`
    );
  }
}
