import { environment } from './../../../environments/environment';
import { Article } from './../interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable, Subject } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private _articles: BehaviorSubject<Article[]> = new BehaviorSubject<
    Article[]
  >([]);
  public articles$: Observable<Article[]> = this._articles
    .asObservable()
    .pipe(filter((val) => !!val));

  public quantity$: Subject<number> = new Subject<number>();

  constructor(private http: HttpClient) {}

  updateArticlesDefault(): Observable<Article[]> {
    return this.getArticles(18).pipe(
      tap((articles) => {
        this._articles.next(articles);
      })
    );
  }

  updateArticlesBySearch(searchPhrase: string) {
    let articles: Article[] = [];
    let articles$: Observable<Article[]>[] = [];

    for (let searchWord of searchPhrase.split(' ')) {
      articles$.push(this.getSearchedArticles('title', searchWord));
    }

    forkJoin(articles$)
      .pipe(
        tap((result) => {
          result.forEach((arr) => {
            articles.push(...arr);
          });
        }),
        
        mergeMap(() => {
          articles$ = [];

          for (let searchWord of searchPhrase.split(' ')) {
            articles$.push(this.getSearchedArticles('summary', searchWord));
          }

          return forkJoin(articles$);
        })
      )
      .subscribe((result) => {
        result.forEach((arr) => {
          articles.push(...arr);
        });
        this._articles.next(articles);
        this.quantity$.next(articles.length);
      });
  }

  getSearchedArticles(
    searchWhere: string,
    searchWord: string
  ): Observable<Article[]> {
    const params = new HttpParams().set(`${searchWhere}_contains`, searchWord);
    return this.http.get<Article[]>(`${environment.apiUrl}/articles`, {
      params,
    });
  }

  getArticles(limit: number): Observable<Article[]> {
    const params = new HttpParams().set('_limit', limit);
    return this.http.get<Article[]>(`${environment.apiUrl}/articles`, {
      params,
    });
  }

  getArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${environment.apiUrl}/articles/${id}`);
  }
}

export function initAppFactory(articleService: ArticleService) {
  return () => articleService.updateArticlesDefault();
}
