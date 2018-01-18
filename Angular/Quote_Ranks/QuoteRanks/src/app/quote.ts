export class Quote implements QuoteModel {
  quote: string;
  author: string;
  rating: number = 0
}

export interface QuoteModel {
  quote: string;
  author: string;
  rating: number;
}
