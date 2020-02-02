import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  // API: GET /todos
  getAllTodos(): Observable<Post[]> {
    return this.http
    .get<Post[]>(API_URL)
    .pipe(tap(data =>JSON.stringify(data))
    ,catchError(this.handleError));
    }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return throwError(error);
  }
  
}
