
import { ArticleDetailsComponent } from '../article-details/article-details.component';
import { Observable } from "rxjs";
import { ArticleService } from "../article.service";
import { Article } from "../article";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-article-list",
  templateUrl: "./articles-list.component.html",
  styleUrls: ["./articles-list.component.css"]
})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(private articleService: ArticleService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.articles = this.articleService.getArticlesList();
  }

  deleteArticle(id: string) {
  
    this.articleService.deleteArticle(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateArticle(id: string){
    this.router.navigate(['update', id]);
  }
  articleDetails(id: string){
    this.router.navigate(['details', id]);
  }
}
