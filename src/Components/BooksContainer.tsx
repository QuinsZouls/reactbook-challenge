import { Col, Empty, Input, Layout, Radio, Row, Spin } from 'antd';

import { useBooks } from '../Hooks/useBooks.hook';
import BooksList from './BooksList';
import { useMemo, useState } from 'react';

const { Header, Content } = Layout;

const sortOptions = [
  { label: 'Relevant', value: 'relevant' },
  { label: 'First Published year', value: 'year' },
];

const BooksContainer = () => {
  const [sort, setSort] = useState<'relevant' | 'year'>('relevant');
  const { books, search, loading } = useBooks();
  // memorize to avoid re-rendering
  const data = useMemo(() => {
    const sorted = [...books];

    if (sort === 'year') {
      return sorted.sort((a, b) => a.published_year - b.published_year);
    }
    return sorted;
  }, [books, sort]);

  return (
    <Layout className="screen">
      <Header style={{ display: 'flex', alignItems: 'center' }}></Header>
      <Content style={{ padding: '0 48px' }} className="responsive-container">
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          <Row justify="center" gutter={[20, 20]}>
            <Col span={12}>
              <Input
                placeholder="Search book name"
                onChange={(e) => search(e.target.value)}
                suffix={<>{loading && <Spin />}</>}
              />
            </Col>
            <Col span={12}>
              <Row justify="end">
                <Col>
                  <Radio.Group
                    options={sortOptions}
                    onChange={(e) => setSort(e.target.value)}
                    value={sort}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              {books.length === 0 ? <Empty /> : <BooksList books={data} />}
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};

export default BooksContainer;
