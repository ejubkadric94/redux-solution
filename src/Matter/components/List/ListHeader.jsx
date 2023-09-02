import { connect, useDispatch, useSelector } from 'react-redux';
import { Radio } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Header } from 'antd/lib/layout/layout';

import { AREAS_OF_LAW } from 'Matter/enums';
import { getAreaOfLaw } from 'Matter/model/selectors';
import { setAreaOfLaw } from 'Matter/model/actions';

import './ListHeader.scss';

const ListHeader = ({ fetchMatterList }) => {
  const dispatch = useDispatch();
  const areaOfLaw = useSelector(getAreaOfLaw);

  const setAreaOfLaw = (e) => {
    dispatch(fetchMatterList(e.target.value));
  };

  return (
    <Header className='header'>
      <Title level={1} className='title'>My Cases</Title>
      <Radio.Group
        onChange={setAreaOfLaw}
        value={areaOfLaw}
      >
        {Object.values(AREAS_OF_LAW).map((item) => (
          <Radio.Button
            value={item.value}
            key={item.value}
          >
            {item.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </Header>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  fetchMatterList: (areaOfLaw) => dispatch(setAreaOfLaw(areaOfLaw)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
