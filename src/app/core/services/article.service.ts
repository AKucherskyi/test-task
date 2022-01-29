import { environment } from './../../../environments/environment';
import { Article } from './../interfaces';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {

    constructor( private http: HttpClient) {}

    getArticles(limit: number): Observable<Article[]> {
        const params = new HttpParams().set('_limit', limit)
        return this.http.get<Article[]>(`${environment.apiUrl}/articles`, {params})
    }

    getArticle(id: string): Observable<Article> {
        return this.http.get<Article>(`${environment.apiUrl}/articles/${id}`)
    }
}