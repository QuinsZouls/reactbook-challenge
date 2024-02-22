import { Card, Descriptions, DescriptionsProps, List } from 'antd';
import { Book } from '../Interfaces/Book.interface';

interface BooksListProps {
  books: Book[];
  loading?: boolean;
}
const BooksList: React.FC<BooksListProps> = ({ books, loading }) => {
  return (
    <List
      itemLayout="vertical"
      grid={{ gutter: 16, column: 3 }}
      dataSource={books}
      loading={loading}
      renderItem={(item) => {
        const items: DescriptionsProps['items'] = [
          {
            key: '1',
            label: 'Title',
            span: 24,
            children: <p>{item.title}</p>,
          },
          {
            key: '2',
            label: 'Authors',
            span: 24,
            children: <p>{item?.authors?.join(', ')}</p>,
          },
          {
            key: '3',
            label: 'First Published Year',
            span: 24,

            children: <p>{item.published_year}</p>,
          },
          {
            key: '4',
            label: 'Total Pages',
            span: 24,

            children: <p>{item.total_pages}</p>,
          },
          {
            key: '5',
            label: 'ISBN Number',
            span: 24,

            children: <p>{item.isbn_number}</p>,
          },
        ];
        return (
          <List.Item>
            <Card>
              <Descriptions items={items} />
            </Card>
          </List.Item>
        );
      }}
    />
  );
};

export default BooksList;
