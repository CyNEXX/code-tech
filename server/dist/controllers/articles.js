"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticle = exports.getCodes = exports.getNews = exports.getPopularArticles = exports.getAllArticles = void 0;
const initial_articles_1 = __importDefault(require("../initialData/initial-articles"));
const TIMEOUT_DELAY = 2000; // ms
const getAllArticles = (req, res, next) => {
    console.log('Getting all articles... :)');
    if (initial_articles_1.default.length < 1) {
        throw new Error('Could not find articles!');
    }
    setTimeout(() => { res.json(initial_articles_1.default); }, TIMEOUT_DELAY);
    /* res.json(initialArticles); */
};
exports.getAllArticles = getAllArticles;
const getPopularArticles = (req, res, next) => {
    console.log('params', req.params);
    const category = req.params.category;
    console.log('category', category);
    console.log('Getting popular articles...of type', category, ' :)');
    if (initial_articles_1.default.length < 1) {
        throw new Error('Could not find popular articles!');
    }
    setTimeout(() => { res.json(initial_articles_1.default.filter(a => (category == 'any') ? true : (a.category === category)).sort((a1, a2) => a2.views - a1.views).slice(0, 4)); }, TIMEOUT_DELAY);
    /* res.json(initialArticles.sort((a1, a2) => a2.views - a1.views).slice(0, 4)); */
};
exports.getPopularArticles = getPopularArticles;
const getNews = (req, res, next) => {
    console.log('Getting news... :)');
    if (initial_articles_1.default.length < 1) {
        throw new Error('Could not find news!');
    }
    setTimeout(() => { res.json(initial_articles_1.default.filter(a => a.category === 'news')); }, TIMEOUT_DELAY);
};
exports.getNews = getNews;
const getCodes = (req, res, next) => {
    console.log('Getting codes... :)');
    if (initial_articles_1.default.length < 1) {
        throw new Error('Could not find codes!');
    }
    setTimeout(() => { res.json(initial_articles_1.default.filter(a => a.category === 'codes')); }, TIMEOUT_DELAY);
    /* res.json(initialArticles.filter(a => a.articleType === 2)); */
};
exports.getCodes = getCodes;
const getArticle = (req, res, next) => {
    const id = +req.params.id;
    console.log('Getting article ID:', id);
    if (initial_articles_1.default.length < 1) {
        throw new Error('Could not find article!');
    }
    setTimeout(() => { res.json(initial_articles_1.default.find(a => a._id == id)); }, TIMEOUT_DELAY);
    /* res.json(initialArticles.find(a => a._id == id)); */
};
exports.getArticle = getArticle;
//getArticle, getNews, getCodes
