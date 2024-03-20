import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ArticlesService } from '../../services/articles.service';
import { ArticleDto } from '../../models/article.dto';
import { ArticleResponse } from '../../models/article.response';
import { MatDialog } from '@angular/material/dialog';
import { NewsModalComponent } from '../news-modal/news-modal.component';

@Component({
  selector: 'app-news-follow',
  templateUrl: './news-follow.component.html',
  styleUrl: './news-follow.component.css'
})
export class NewsFollowComponent {
  
  articleList: Array<ArticleResponse> = []

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

  constructor(
    private _articleServices: ArticlesService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getArticles()
  }

  getArticles(){
    let response = this._articleServices.getNewsByUser()

    if(response){
      this.articleList = JSON.parse(response)
    }
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  editArticle(article: ArticleResponse) {
    const dialogRef = this.dialog.open(NewsModalComponent, {
      width: '50%',
      height: '70%',
      data: article
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.getArticles()
      } else {
        alert("no se pudo editar")
      }

    });
  }
}
