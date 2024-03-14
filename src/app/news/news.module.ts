import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastNewsComponent } from './last-news/last-news.component';
import { NewsFollowComponent } from './news-follow/news-follow.component';
import { NewsRoutingModule } from './news-routing.module';
import { ArticlesService } from '../services/articles.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    LastNewsComponent,
    NewsFollowComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,

    //material module
    MatCardModule,
    MatPaginatorModule,
  ],
  providers: [
    ArticlesService
  ]
})
export class NewsModule { }
