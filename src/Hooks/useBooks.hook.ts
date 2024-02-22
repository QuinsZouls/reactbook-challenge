import { useState } from 'react';
import { Book } from '../Interfaces/Book.interface';
import { BooksAPIClient } from '../Services/BookAPI.service';
import { parseRawBooks } from '../Utils/parsers';

let timeout: NodeJS.Timeout;

export function useBooks() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const search = (name: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(async () => {
      setLoading(true);
      const result = await BooksAPIClient.searchBooks(name);
      setBooks(parseRawBooks(result.docs));
      setLoading(false);
    }, 800);
  };

  return {
    books,
    search,
    loading,
  };
}
