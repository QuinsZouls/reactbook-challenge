import { Book, RawBook } from '../Interfaces/Book.interface';

export function parseRawBooks(rawBooks: RawBook[]): Book[] {
  return rawBooks.map((record) => {
    return {
      title: record.title || 'NA',
      authors: record.author_name || [],
      published_year: record.first_publish_year || 0,
      isbn_number: record?.isbn ? record?.isbn[0] : 'NA',
      total_pages: record.number_of_pages_median,
    } as Book;
  });
}
