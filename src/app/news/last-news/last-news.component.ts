import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { ArticleDto } from '../../models/article.dto';
import { PageEvent } from '@angular/material/paginator';
import { ArticleResponse } from '../../models/article.response';

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
    if(response?.results) {
      this.articleList = response.results
      this.length = this.articleList.length

    }
    
  }

  getErrorResponse(error: any) {
    console.error(error)
  }

  handlePageEvent(e: PageEvent) {
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
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  like(article: ArticleResponse){

    let status = this._articleServices.saveUserNews(article)
    if(status){
      alert("guardado correctamente")
    }else {

      alert("No se pudo guardar la noticia")
    }
  }

  getSaveRespose(response: any){
    
    
  }
}
