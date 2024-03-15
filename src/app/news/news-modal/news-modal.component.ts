import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ArticleResponse } from '../../models/article.response';
import { FormBuilder, Validators } from '@angular/forms';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrl: './news-modal.component.css'
})
export class NewsModalComponent {


  articleForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(100)]],
    news_site: ['', [Validators.required, Validators.maxLength(50)]],
    summary: ['', [Validators.required, Validators.maxLength(400)]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ArticleResponse,
    public dialogRef: MatDialogRef<NewsModalComponent >,
    private formBuilder: FormBuilder,
    private _articleServices: ArticlesService){
    console.log("data", data)
    this.articleForm.patchValue({
      title: this.data.title,
      news_site: this.data.news_site,
      summary: this.data.summary
    });
  }

  editArticle() {
    console.log("title", this.articleForm.controls.title.value)
    console.log("news_site", this.articleForm.controls.news_site.value)
    console.log("summary", this.articleForm.controls.summary.value)
    let status = this._articleServices.updateUserNews(
      this.data.id,
      this.articleForm.controls.title.value || "",
      this.articleForm.controls.news_site.value || "",
      this.articleForm.controls.summary.value || ""
    )
    if(status) {
      this.dialogRef.close(true)
    } else {
      this.dialogRef.close(false)
    }

    
  }
}
