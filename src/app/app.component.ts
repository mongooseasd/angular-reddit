import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
  constructor() {
    this.articles = [
      new Article('Aaaaaangular', 'https://angular.io', 10),
      new Article('Fuuullllstck', 'https://fullstack.io', 2),
      new Article('Csip', 'https://csip.com', 2),
    ];

  }

}
