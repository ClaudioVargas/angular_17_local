import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastNewsComponent } from './last-news/last-news.component';
import { NewsFollowComponent } from './news-follow/news-follow.component';
import { NewsRoutingModule } from './news-routing.module';
import { ArticlesService } from '../services/articles.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NewsModalComponent } from './news-modal/news-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LastNewsComponent,
    NewsFollowComponent,
    NewsModalComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,

    //material module
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,    
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [
    ArticlesService
  ]
})
export class NewsModule { }
