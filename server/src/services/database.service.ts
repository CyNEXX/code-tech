import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
const MongoClient = mongoDB.MongoClient;
import Article from "../models/article";
import initialArticles from "../initialData/initial-articles";


// .\mongod --dbpath="c:\Users\cynex\mongodb-data"

export const collections: { articles?: mongoDB.Collection } = {}

export const connectToDatabase = async () => {
    try {
        dotenv.config();

        const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);

        await client.connect();

        const db: mongoDB.Db = client.db(process.env.DB_NAME);

        const articlesCollection: mongoDB.Collection = db.collection(process.env.ARTICLES_COLLECTION_NAME!);

        collections.articles = articlesCollection;

        try {
            const articles = (await collections.articles!.find({}).toArray()) as unknown as Article[];
            if (articles.length < 1) {
                console.log('No Articles found. Updating database...');
                const articlesForDB = initialArticles.map(a => {
                    const newArticle: any = {};
                    Object.entries(a).forEach(([key, value]) => {
                        if (key != '_id') {
                            newArticle[key] = value;
                        }
                    });
                    return newArticle;
                });
                collections.articles.insertMany(articlesForDB);
            }
        } catch (error) {
            console.log(error);
            console.log('---------------------')
        }

        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${articlesCollection.collectionName}`);

    } catch (e) {
        console.log('Cannot connect to the database');
    }




}