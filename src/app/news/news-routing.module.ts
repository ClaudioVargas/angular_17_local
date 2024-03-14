import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastNewsComponent } from './last-news/last-news.component';
import { NewsFollowComponent } from './news-follow/news-follow.component';

const routes: Routes = [
  { path: '', redirectTo: 'last-news', pathMatch: 'full' },
  { path: 'last-news', component: LastNewsComponent },
  { path: 'news-follow', component: NewsFollowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
