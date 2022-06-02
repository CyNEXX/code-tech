"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Article {
    constructor(title, shortDescription, longDescription, photoURL, detailsURL, category, views, id) {
        this.title = title;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.photoURL = photoURL;
        this.detailsURL = detailsURL;
        this.category = category;
        this.views = views;
        this.id = id;
    }
}
exports.default = Article;
