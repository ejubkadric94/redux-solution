import { Content } from 'antd/lib/layout/layout';
import { Layout, Table } from 'antd';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { fetchMatterDetails } from 'Matter/model/actions';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import DetailsHeader from './DetailsHeader';
import { MATTER_DETAILS_TABLE_COLUMNS } from 'Matter/enums';
import { getMatterDetails, getMatterDetailsDisplayState, getMatterDetailsError } from 'Matter/model/selectors';
import { FETCH_STATE } from 'Matter/model/constants';
import { Error, Loader } from 'shared/components';

const Details = ({ fetchMatterDetails, matterDetails, matterDetailsDisplayStatus, matterDetailsError }) => {
  const { id } = useParams();
  
  useEffect(() => {
    fetchMatterDetails({ id });
  }, [id, fetchMatterDetails]);

  let content, title = 'Loading...';

  switch (matterDetailsDisplayStatus) {
    case FETCH_STATE.SUCCESS:
      content = (
        <Table
          columns={MATTER_DETAILS_TABLE_COLUMNS}
          dataSource={matterDetails.tasks}
          rowKey={record => record._id}
          pagination={false}
        />
      );
      title = matterDetails.title;
      break;
    case FETCH_STATE.ERROR:
      content = <Error error={matterDetailsError} />;
      break;
    case FETCH_STATE.LOADING:
    default:
      content = <Loader />;
      break;
  }

  return (
    <Layout className='layout' >
      <DetailsHeader title={title} />
      <Content>{content}</Content>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  matterDetails: getMatterDetails(state),
  matterDetailsDisplayStatus: getMatterDetailsDisplayState(state),
  matterDetailsError: getMatterDetailsError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchMatterDetails: id => dispatch(fetchMatterDetails(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
