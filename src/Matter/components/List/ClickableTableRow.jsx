import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const ClickableTableRow = ({ record, className, ...props }) => {
  const history = useHistory();

  const onClick = () => {
    if (!record) {
      return;
    }
    history.push(`/details/${record._id}`);
  };

  return (
    <tr {...props} className={`ant-table-row ${className}`} onClick={onClick} />
  );
};

export default ClickableTableRow;
