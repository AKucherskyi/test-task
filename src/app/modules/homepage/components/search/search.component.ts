import { ArticleService } from 'src/app/core/services/article.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      search: [this.articleService.predicate$.value],
    });
  }

  search() {
    if (!this.form.value.search) {
      this.articleService.updateArticlesDefault().subscribe(() => {
        this.articleService.quantity$.next(0)
        this.articleService.predicate$.next('')
      })
      return
    }
    this.articleService.updateArticlesBySearch(this.form.value.search);
  }
}
