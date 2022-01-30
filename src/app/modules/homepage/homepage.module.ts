
import { NgModule } from '@angular/core';

import { HomepageLayoutComponent } from './homepage-layout/homepage-layout.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomepageLayoutComponent,
    SearchComponent,
    ArticleCardComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomepageModule { }
