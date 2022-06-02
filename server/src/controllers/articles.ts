import { RequestHandler } from "express";
import { ObjectId } from "mongodb";
import initialArticles from '../initialData/initial-articles';
import { collections } from "../services/database.service";

const TIMEOUT_DELAY = 0; // ms

export const getAllArticles: RequestHandler = async (req, res, next) => {
  console.log('Getting all articles... :)');

  try {
    await collections.articles!.find({}).toArray().then(articles => {
      if (articles.length < 1) {
        throw new Error('Could not find articles!');
      }
      res.json(articles);
    });
  } catch (e) { console.log('Error for articles'); res.sendStatus(503); }

}

export const getPopularArticles: RequestHandler = async (req, res, next) => {
  const category = req.params.category;
  console.log('Getting popular articles...of type', category, ' :)');

  const query: any = {};
  if (category !== 'any') {
    query.category = category;
  }

  await collections.articles!.find(query).sort({ views: 1 }).limit(4).toArray().then(results => {
    console.log('Popular!!!!')
    if (results.length < 1) {
      throw new Error('Could not find popular articles!');
    }
    res.json(results);
  }).catch(e => { console.log('Error for popular'); res.sendStatus(503); });


}

export const getNews: RequestHandler = async (req, res, next) => {
  console.log('Getting news... :)');

  try {
    await collections.articles!.find({ category: 'news' }).toArray().then(results => {
      if (results.length < 1) {
        throw new Error('Could not find news!');
      }
      res.json(results);
    });

  } catch (e) { console.log('Error for news'); res.sendStatus(503); }

}

export const getCodes: RequestHandler = async (req, res, next) => {
  console.log('Getting codes... :)');

  try {
    await collections.articles!.find({ category: 'codes' }).toArray().then(results => {
      if (results.length < 1) {
        throw new Error('Could not find codes!');
      }
      res.json(results);
    });

  } catch (e) { console.log('Error for codes'); res.sendStatus(503); }

}

export const getArticle: RequestHandler = async (req, res, next) => {
  const id = req.params.id;
  console.log('Getting article ID:', id);

  try {
    await collections.articles!
      .findOneAndUpdate({ '_id': new ObjectId(id) }, { $inc: { views: 1 } }, { returnDocument: 'after' })
      .then(result => {

        if (!result) {
          throw new Error('Could not find article! with _id: ' + id);
        }
        res.json(result.value);
      });

  } catch (e) {
    console.log('Error for id: ' + id);
    console.log(e);
  }
}

