import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ArticlesService } from '../../services/articles.service';
import { ArticleDto } from '../../models/article.dto';
import { ArticleRequest } from '../../models/news.request';

@Component({
  selector: 'app-news-follow',
  templateUrl: './news-follow.component.html',
  styleUrl: './news-follow.component.css'
})
export class NewsFollowComponent {
  
  articleList: Array<ArticleRequest> = []

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
    this._articleServices.getNewsByUser(1).subscribe( {
      next: this.getRespose.bind(this),
      error: this.getErrorResponse.bind(this)
    } )
  }

  getRespose(response: any){
    console.log("response", response)
    if(response?.length > 0) {
      this.articleList = response
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
}
