export interface ArticleRequest {

    id: number,
    title: string,
    subTitle: string, // news_site
    description: string, // summary
    urlImage: string, // image_url
    publishedAt: Date,
    updatedAt: Date,
    active: boolean

}