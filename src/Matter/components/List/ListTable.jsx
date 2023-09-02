import { Table } from 'antd';
import { MATTERS_TABLE_COLUMNS } from 'Matter/enums';
import { useDispatch, useSelector } from 'react-redux';

import ClickableTableRow from './ClickableTableRow';

import { setPage } from 'Matter/model/actions';
import { getMattersList, getPageNumber, getTotalNumberOfDocuments } from 'Matter/model/selectors';

const ListTable = () => {
  const dispatch = useDispatch();
  const data = useSelector(getMattersList);
  const pageNumber = useSelector(getPageNumber);
  const numberOfDocuments = useSelector(getTotalNumberOfDocuments);

  const onPageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <Table
      columns={MATTERS_TABLE_COLUMNS}
      dataSource={data}
      onRow={(record) => ({ record })}
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
};

export default ListTable;
