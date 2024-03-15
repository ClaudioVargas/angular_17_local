import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleResponse } from '../../models/article.response';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrl: './news-modal.component.css'
})
export class NewsModalComponent {


  articleForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    news_site: ['', [Validators.required, Validators.maxLength(50)]],
    summary: ['', [Validators.required, Validators.maxLength(200)]],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ArticleResponse,
    private formBuilder: FormBuilder){
    console.log("data", data)
    this.articleForm.patchValue({
      title: this.data.title,
      news_site: this.data.news_site,
      summary: this.data.summary
    });
  }

  editArticle() {
    console.log("this.formBuilder.control", this.formBuilder.control)
  }
}
