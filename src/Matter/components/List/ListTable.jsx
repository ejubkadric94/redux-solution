import { Table } from 'antd';
import { MATTERS_TABLE_COLUMNS } from 'Matter/enums';
import { connect } from 'react-redux';

import ClickableTableRow from './ClickableTableRow';

import { setPage } from 'Matter/model/actions';
import { getMattersList, getPageNumber, getTotalNumberOfDocuments } from 'Matter/model/selectors';

const ListTable = ({ data, pageNumber, numberOfDocuments, onPageChange }) => (
  <Table
    columns={MATTERS_TABLE_COLUMNS}
    dataSource={data}
    onRow={(record) => ({ record })}
    rowKey={(record) => record._id}
    components={{
      body: {
        row: ClickableTableRow,
      },
    }}
    pagination={{
      pageSize: 10,
      current: pageNumber,
      total: numberOfDocuments,
      showSizeChanger: false,
      onChange: onPageChange,
    }}
  />
);

const mapStateToProps = (state) => ({
  data: getMattersList(state),
  pageNumber: getPageNumber(state),
  numberOfDocuments: getTotalNumberOfDocuments(state),
});

const mapDispatchToProps = dispatch => ({
  onPageChange: (page) => dispatch(setPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListTable);
