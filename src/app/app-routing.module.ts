import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastNewsComponent } from './news/last-news/last-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full'},
  {
    path: 'news',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  { path: '**', redirectTo: 'news' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
