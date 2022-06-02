import { ObjectId } from "mongodb";

export default class Article {
    constructor(
        public title: string, public shortDescription: string,
        public longDescription: string, public photoURL: string, 
        public detailsURL: string, public category: string, public views: number, 
        public id?: ObjectId
    ) { }
}
