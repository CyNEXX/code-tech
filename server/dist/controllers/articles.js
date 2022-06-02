"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticle = exports.getCodes = exports.getNews = exports.getPopularArticles = exports.getAllArticles = void 0;
const mongodb_1 = require("mongodb");
const database_service_1 = require("../services/database.service");
const TIMEOUT_DELAY = 0; // ms
const getAllArticles = async (req, res, next) => {
    console.log('Getting all articles... :)');
    try {
        await database_service_1.collections.articles.find({}).toArray().then(articles => {
            if (articles.length < 1) {
                throw new Error('Could not find articles!');
            }
            res.json(articles);
        });
    }
    catch (e) {
        console.log('Error for articles');
        res.sendStatus(503);
    }
};
exports.getAllArticles = getAllArticles;
const getPopularArticles = async (req, res, next) => {
    const category = req.params.category;
    console.log('Getting popular articles...of type', category, ' :)');
    const query = {};
    if (category !== 'any') {
        query.category = category;
    }
    await database_service_1.collections.articles.find(query).sort({ views: 1 }).limit(4).toArray().then(results => {
        console.log('Popular!!!!');
        if (results.length < 1) {
            throw new Error('Could not find popular articles!');
        }
        res.json(results);
    }).catch(e => { console.log('Error for popular'); res.sendStatus(503); });
};
exports.getPopularArticles = getPopularArticles;
const getNews = async (req, res, next) => {
    console.log('Getting news... :)');
    try {
        await database_service_1.collections.articles.find({ category: 'news' }).toArray().then(results => {
            if (results.length < 1) {
                throw new Error('Could not find news!');
            }
            res.json(results);
        });
    }
    catch (e) {
        console.log('Error for news');
        res.sendStatus(503);
    }
};
exports.getNews = getNews;
const getCodes = async (req, res, next) => {
    console.log('Getting codes... :)');
    try {
        await database_service_1.collections.articles.find({ category: 'codes' }).toArray().then(results => {
            if (results.length < 1) {
                throw new Error('Could not find codes!');
            }
            res.json(results);
        });
    }
    catch (e) {
        console.log('Error for codes');
        res.sendStatus(503);
    }
};
exports.getCodes = getCodes;
const getArticle = async (req, res, next) => {
    const id = req.params.id;
    console.log('Getting article ID:', id);
    try {
        await database_service_1.collections.articles
            .findOneAndUpdate({ '_id': new mongodb_1.ObjectId(id) }, { $inc: { views: 1 } }, { returnDocument: 'after' })
            .then(result => {
            if (!result) {
                throw new Error('Could not find article! with _id: ' + id);
            }
            res.json(result.value);
        });
    }
    catch (e) {
        console.log('Error for id: ' + id);
        console.log(e);
    }
};
exports.getArticle = getArticle;
