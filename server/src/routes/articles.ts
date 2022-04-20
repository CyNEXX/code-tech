import { Router } from "express";
import { getArticle, getNews, getCodes, getAllArticles, getPopularArticles } from "../controllers/articles";

const router = Router();

router.get('/articles/any', getAllArticles);

router.get('/articles/news', getNews);

router.get('/articles/codes', getCodes)

router.get('/popular/:category', getPopularArticles);

router.get('/article/:id', getArticle);

export default router;