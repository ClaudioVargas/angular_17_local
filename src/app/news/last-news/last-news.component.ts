import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ArticleDto } from '../../models/article.dto';
import { PageEvent } from '@angular/material/paginator';
import { ArticleRequest } from '../../models/news.request';

@Component({
  selector: 'app-last-news',
  templateUrl: './last-news.component.html',
  styleUrl: './last-news.component.css'
})
export class LastNewsComponent implements OnInit  {

  articleList: Array<ArticleDto> = []

  length = 10;
  pageSize = 0; // pagina donde iniciamos
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: any
  // pageEvent: PageEvent;

  constructor(private _articleServices: ArticlesService) { }

  ngOnInit(): void {
    this._articleServices.articleGetAll(10, 0).subscribe( {
      next: this.getRespose.bind(this),
      error: this.getErrorResponse.bind(this)
    } )
  }

  getRespose(response: any){
    console.log("response", response)
    if(response?.results) {
      this.articleList = response.results
      this.length = this.articleList.length
      console.log("this.articleList", this.articleList)

    }
    
  }

  getErrorResponse(error: any) {
    console.error(error)
  }

  handlePageEvent(e: PageEvent) {
    console.log("handlePageEvent", e)
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this._articleServices.articleGetAll(this.pageSize, this.length).subscribe( {
      next: this.getRespose.bind(this),
      error: this.getErrorResponse.bind(this)
    } )
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    console.log("setPageSizeOptions", setPageSizeOptionsInput)
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  like(article: ArticleDto){
    console.log("article", article)

    let articleRequest = {
      id: article.id,
      title: article.title,
      subTitle: article.news_site,
      description: article.summary,
      urlImage: article.image_url,
      publishedAt: new Date(),
      updatedAt: new Date(),
      active: true
    } as ArticleRequest

    console.log("articleDto", articleRequest)
    this._articleServices.saveUserNews(1, articleRequest).subscribe({
      next: this.getSaveRespose.bind(this),
      error: this.getErrorResponse.bind(this)
    })
  }

  getSaveRespose(response: any){
    console.log("response", response)
    
    
  }
}
