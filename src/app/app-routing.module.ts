
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticleListComponent } from './articles-list/article-list.component';
import { UpdateArticleComponent } from './update-article/update-article.component';

const routes: Routes = [
  { path: '', redirectTo: 'article', pathMatch: 'full' },
  { path: 'articles', component: ArticleListComponent },
  { path: 'add', component: CreateArticleComponent },
  { path: 'update/:id', component: UpdateArticleComponent },
  { path: 'details/:id', component: ArticleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
