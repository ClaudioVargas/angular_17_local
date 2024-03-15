import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleDto } from '../models/article.dto';
import { ArticleRequest } from '../models/news.request';
import { ArticleResponse } from '../models/article.response';

import * as ls from "local-storage";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  readonly urlArticles = 'https://api.spaceflightnewsapi.net/v4/articles'

  readonly articleLocal = "articleList"

  articleGetAll(limit: number, offset: number): Observable<any> {

    var url = ' https://api.spaceflightnewsapi.net/v4/articles'

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

  saveUserNews(article: ArticleResponse): boolean {
    // type ArticleLocal = Omit<ArticleResponse, "event" | "featured" | "launches" | "url">;

    let articleListLocal = localStorage.getItem(this.articleLocal)
    console.log("articleListLocal", articleListLocal)
    let articleList: Array<ArticleResponse> = []

    try {
      debugger
      if(articleListLocal) {
        articleList = JSON.parse(articleListLocal) as Array<ArticleResponse>
        articleList.push(article)
        localStorage.setItem(this.articleLocal, JSON.stringify(articleList))
        return true
      } else {
        articleList.push(article)
        localStorage.setItem(this.articleLocal, JSON.stringify(articleList))
        return true;
      }
    } catch (error) {
      console.log("Error al guardar article", error)
      return false
    }
  }

  getNewsByUser(): string | null {
    try {
      let articleList = localStorage.getItem(this.articleLocal)
      console.log("articleList", articleList)
      if(articleList) {
        return articleList
      }
      return null
      
    } catch (error) {
      return null
    }
  }
}


