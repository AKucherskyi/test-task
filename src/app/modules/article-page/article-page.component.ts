import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Article } from 'src/app/core/interfaces';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss']
})
export class ArticlePageComponent implements OnInit {

  article$!: Observable<Article>

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.article$ = this.route.params.pipe(
      switchMap(params => this.articleService.getArticle(params['id']))
    )
  }

}
