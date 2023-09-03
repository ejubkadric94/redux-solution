import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

import './ClickableTableRow.scss';

const ClickableTableRow = ({ record, ...props }) => {
  const history = useHistory();

  const onClick = () => {
    if (!record) {
      return;
    }
    history.push(`/details/${record._id}`);
  };

  return (
    <tr
      {...props}
      className={'ant-table-row clickable'}
      onClick={onClick}
    />
  );
};

export default ClickableTableRow;
