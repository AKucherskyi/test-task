
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';


import { ArticlePageRoutingModule } from './article-page-routing.module';
import { ArticlePageComponent } from './article-page.component';


@NgModule({
  declarations: [
    ArticlePageComponent
  ],
  imports: [
    SharedModule,
    ArticlePageRoutingModule
  ]
})
export class ArticlePageModule { }
