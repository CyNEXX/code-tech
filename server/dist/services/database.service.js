"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = exports.collections = void 0;
const mongoDB = __importStar(require("mongodb"));
const dotenv = __importStar(require("dotenv"));
const MongoClient = mongoDB.MongoClient;
const initial_articles_1 = __importDefault(require("../initialData/initial-articles"));
// .\mongod --dbpath="c:\Users\cynex\mongodb-data"
exports.collections = {};
const connectToDatabase = async () => {
    try {
        dotenv.config();
        const client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const articlesCollection = db.collection(process.env.ARTICLES_COLLECTION_NAME);
        exports.collections.articles = articlesCollection;
        try {
            const articles = (await exports.collections.articles.find({}).toArray());
            if (articles.length < 1) {
                console.log('No Articles found. Updating database...');
                const articlesForDB = initial_articles_1.default.map(a => {
                    const newArticle = {};
                    Object.entries(a).forEach(([key, value]) => {
                        if (key != '_id') {
                            newArticle[key] = value;
                        }
                    });
                    return newArticle;
                });
                exports.collections.articles.insertMany(articlesForDB);
            }
        }
        catch (error) {
            console.log(error);
            console.log('---------------------');
        }
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${articlesCollection.collectionName}`);
    }
    catch (e) {
        console.log('Cannot connect to the database');
    }
};
exports.connectToDatabase = connectToDatabase;
