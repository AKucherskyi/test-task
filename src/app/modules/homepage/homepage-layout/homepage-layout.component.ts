import { ArticleService } from './../../../core/services/article.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/core/interfaces';

@Component({
  selector: 'app-homepage-layout',
  templateUrl: './homepage-layout.component.html',
  styleUrls: ['./homepage-layout.component.scss']
})
export class HomepageLayoutComponent implements OnInit {
  articles$!: Observable<Article[]>

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this.articleService.getArticles(18)
  }

}
