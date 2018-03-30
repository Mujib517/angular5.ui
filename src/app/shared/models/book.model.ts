import { Review } from "./review.model";

export class Book {
    id: string;
    name: string;
    author: string;
    price: number;
    lastUpdated: Date;
    reviews: Review[]
}
