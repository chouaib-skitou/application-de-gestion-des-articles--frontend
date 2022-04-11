import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:8080/api_crud';

  constructor(private http: HttpClient) { }

  getArticle(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/single_article.php`,
    { params: { id: id } });
  }

  createArticle(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create.php`, user);
  }

  updateArticle(user: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update.php`, user);
  }

  deleteArticle(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete.php`,
    { params: { id: id } },
    );
  }

  getArticlesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/read.php`);
  }
}