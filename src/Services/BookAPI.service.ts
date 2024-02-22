import axios, { type AxiosInstance } from 'axios';
import { RawBookResponse } from '../Interfaces/Book.interface';

export class BooksAPI {
  private client: AxiosInstance;
  constructor(baseURL = import.meta.env.VITE_APP_BOOK_API_URL) {
    this.client = axios.create({
      baseURL,
    });
  }

  async searchBooks(name?: string) {
    const result = await this.client.get<RawBookResponse>(`/search.json?q=${name}`);

    return result.data;
  }
}

export const BooksAPIClient = new BooksAPI();
