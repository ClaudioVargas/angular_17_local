import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleDto } from '../models/article.dto';
import { ArticleRequest } from '../models/news.request';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  readonly urlArticles =  'https://api.spaceflightnewsapi.net/v4/articles'
  readonly urlBase =  "http://localhost:8080/api/"

  articleGetAll(limit: number, offset: number): Observable<any> {

    var url =  ' https://api.spaceflightnewsapi.net/v4/articles'

    // let httpOptions = {
    //   headers: new HttpHeaders({
        
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'X-RapidAPI-Key': '43f3912ee0msha0c0df52527a97fp18b7bdjsna7afaa404d6e',
    //   'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //   })
    // }
    // "https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10",

    return this.http.get(`${url}/?limit=${limit}&offset=${offset}`)
  }

  saveUserNews(userId: number, article: ArticleRequest): Observable<any> {
    
    let headers = new Headers();

    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');

    return this.http.post(`http://localhost:8080/api/user/saveuserNews/${userId}`, article);
  }

  getNewsByUser(userId: number): Observable<any> {

    return this.http.get(`${this.urlBase}user/getNewsByUser/${userId}`)
  }
}


