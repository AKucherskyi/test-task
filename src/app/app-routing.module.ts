import { HomepageLayoutComponent } from './modules/homepage/homepage-layout/homepage-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomepageLayoutComponent},
  {path: 'article/:id', loadChildren: () => import('./modules/article-page/article-page.module').then(m => m.ArticlePageModule) },
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
