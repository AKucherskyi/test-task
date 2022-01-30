import { ArticleService } from 'src/app/core/services/article.service';
import { Article } from './../../../../core/interfaces';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCardComponent implements OnInit, OnDestroy {
  @Input() article!: Article;
  predicate!: string;

  destroy$: Subject<void> = new Subject<void>();

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.predicate$
      .pipe(takeUntil(this.destroy$))
      .subscribe((predicate) => {
        this.predicate = predicate;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
