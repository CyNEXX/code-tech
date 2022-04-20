import { ArticleCategories } from "./ArticleCategories";

export class Article implements BasicArticle {

    _id: number;
    title: string;
    shortDescription: string;
    longDescription: string;
    category: ArticleCategories;
    photoUrl: string;
    code?: string;
    createdAt: number;
    views?: number;

    constructor(title: string, shortDescription: string, longDescription: string, category: ArticleCategories, photoUrl: string, code?: string) {
        this._id = new Date().getTime();
        this.title = title;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.category = category;
        this.photoUrl = photoUrl;
        this.createdAt = new Date().getTime();
        this.code = code;
    }


}

