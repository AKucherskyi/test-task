
import { NgModule } from '@angular/core';

import { HomepageLayoutComponent } from './homepage-layout/homepage-layout.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArticleCardComponent } from './components/article-card/article-card.component';

@NgModule({
  declarations: [
    HomepageLayoutComponent,
    SearchComponent,
    ArticleCardComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomepageModule { }
