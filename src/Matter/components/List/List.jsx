import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Error, Loader } from 'shared/components';
import { Content } from 'antd/lib/layout/layout';

import ListHeader from './ListHeader';
import ListTable from './ListTable';

import { fetchMatterList } from 'Matter/model/actions';
import { FETCH_STATE } from 'Matter/model/constants';
import { getAreaOfLaw, getMattersListDisplayState, getMattersListError, getPageNumber } from 'Matter/model/selectors';

import './List.scss';

const List = ({ fetchMatterList, pageNumber, areaOfLaw, mattersListDisplayStatus, error }) => {
  useEffect(() => {
    fetchMatterList(pageNumber, areaOfLaw);
  }, [fetchMatterList, pageNumber, areaOfLaw]);

  let content;

  switch(mattersListDisplayStatus) {
    case FETCH_STATE.SUCCESS:
      content = <ListTable />;
      break;
    case FETCH_STATE.ERROR:
      content = <Error error={error} />;
      break;
    case FETCH_STATE.LOADING:
    default:
      content = <Loader />;
      break;
  }

  return (
    <Layout className='layout' >
      <ListHeader />
      <Content>{content}</Content>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
  areaOfLaw: getAreaOfLaw(state),
  mattersListDisplayStatus: getMattersListDisplayState(state),
  error: getMattersListError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchMatterList: (pageNumber, areaOfLaw) => dispatch(fetchMatterList(pageNumber, areaOfLaw)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
