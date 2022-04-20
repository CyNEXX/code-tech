import { RequestHandler } from "express";
import initialArticles from '../initialData/initial-articles';

const TIMEOUT_DELAY = 2000; // ms

export const getAllArticles: RequestHandler = (req, res, next) => {
  console.log('Getting all articles... :)');
  if (initialArticles.length < 1) {
    throw new Error('Could not find articles!');
  }
  setTimeout(() => { res.json(initialArticles); }, TIMEOUT_DELAY);
  /* res.json(initialArticles); */
}

export const getPopularArticles: RequestHandler = (req, res, next) => {
  console.log('params', req.params);
  const category = req.params.category;
  console.log('category', category);
  console.log('Getting popular articles...of type', category, ' :)');
  if (initialArticles.length < 1) {
    throw new Error('Could not find popular articles!');
  }
  setTimeout(() => { res.json(initialArticles.filter(a => (category == 'any') ? true : (a.category === category)).sort((a1, a2) => a2.views - a1.views).slice(0, 4)); }, TIMEOUT_DELAY);
  /* res.json(initialArticles.sort((a1, a2) => a2.views - a1.views).slice(0, 4)); */
}

export const getNews: RequestHandler = (req, res, next) => {
  console.log('Getting news... :)');
  if (initialArticles.length < 1) {
    throw new Error('Could not find news!');
  }
  setTimeout(() => { res.json(initialArticles.filter(a => a.category === 'news')); }, TIMEOUT_DELAY);
}

export const getCodes: RequestHandler = (req, res, next) => {
  console.log('Getting codes... :)');
  if (initialArticles.length < 1) {
    throw new Error('Could not find codes!');
  }
  setTimeout(() => { res.json(initialArticles.filter(a => a.category === 'codes')); }, TIMEOUT_DELAY);
  /* res.json(initialArticles.filter(a => a.articleType === 2)); */
}

export const getArticle: RequestHandler = (req, res, next) => {
  const id = +req.params.id;
  console.log('Getting article ID:', id);
  if (initialArticles.length < 1) {
    throw new Error('Could not find article!');
  }
  setTimeout(() => { res.json(initialArticles.find(a => a._id == id)); }, TIMEOUT_DELAY);
  /* res.json(initialArticles.find(a => a._id == id)); */
}

//getArticle, getNews, getCodes