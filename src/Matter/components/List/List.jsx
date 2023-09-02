import { connect } from 'react-redux';
import { Layout, Table } from 'antd';
import { Content } from 'antd/lib/layout/layout';
// import { NoData, Error, Loader } from 'shared/components';

import ListHeader from './ListHeader';
import ClickableTableRow from './ClickableTableRow';
import { MATTERS_TABLE_COLUMNS } from 'Matter/enums';

import './List.scss';

const testData = [
  {
      "_id": "5efda8ad60fe2f001bcf2fe4",
      "title": "Lionel Messi ./. Inter Miami",
      "areaOfLaw": "Allgemeines Vertragsrecht",
      "status": "submitted",
      "createdAt": "2020-07-02T09:28:13.463Z"
  },
  {
      "_id": "5f046210914b62001b81ba3f",
      "title": "Ariadne Astrofall ./. ",
      "areaOfLaw": "Allgemeines Vertragsrecht",
      "status": "submitted",
      "createdAt": "2020-07-07T11:52:48.176Z"
  },
  {
      "_id": "5f049074914b62001b81ba5c",
      "title": "TEST TEST ./. Hopkins GmbH",
      "areaOfLaw": "Sozialrecht",
      "status": "submitted",
      "createdAt": "2020-07-07T15:10:44.599Z"
  },
  {
      "_id": "5f049acc914b62001b81ba63",
      "title": "Nazmi Sinani ./. ",
      "areaOfLaw": "Allgemeines Vertragsrecht",
      "status": "submitted",
      "createdAt": "2020-07-07T15:54:52.263Z"
  },
  {
      "_id": "5f04ac92914b62001b81ba67",
      "title": "FirstName TEST ./. Hopkins GmbH",
      "areaOfLaw": "Arbeitsrecht",
      "status": "submitted",
      "createdAt": "2020-07-07T17:10:42.447Z"
  },
  {
      "_id": "5f2bcb1b284918001b62c791",
      "title": "django mael ./. ",
      "areaOfLaw": "Allgemeines Vertragsrecht",
      "status": "closed",
      "createdAt": "2020-08-06T09:19:23.952Z"
  },
  {
      "_id": "5f4cf2c7a49668001b48ecc3",
      "title": "Daria Berkowska ./. ",
      "areaOfLaw": "Allgemeines Vertragsrecht",
      "status": "submitted",
      "createdAt": "2020-08-31T12:53:27.170Z"
  },
  {
      "_id": "5f6070a8a49668001b48eed4",
      "title": "Rita Manilli ./. ",
      "areaOfLaw": "Arbeitsrecht",
      "status": "submitted",
      "createdAt": "2020-09-15T07:43:36.479Z"
  },
  {
      "_id": "5f60c925a49668001b48eee0",
      "title": "Lionel Messi ./. Inter Miami",
      "areaOfLaw": "Allgemeines Vertragsrecht",
      "status": "submitted",
      "createdAt": "2020-09-15T14:01:09.206Z"
  },
  {
      "_id": "5f75a667f06b8c001b1ed1eb",
      "title": "Matilde Wilde ./. StupidCompany GmbH & Co. KG",
      "areaOfLaw": "Allgemeines Vertragsrecht",
      "status": "submitted",
      "createdAt": "2020-10-01T09:50:31.937Z"
  }
];

const List = () => {

  return (
    <Layout style={{ backgroundColor: 'transparent' }}>
      <ListHeader />
      <Content>
        <Table
          columns={MATTERS_TABLE_COLUMNS}
          dataSource={testData}
          onRow={(record) => ({
            record: record,
          })}
          components={{
            body: {
              row: <ClickableTableRow />
            }
          }}
        />
      </Content>
    </Layout>
  )
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(List);
