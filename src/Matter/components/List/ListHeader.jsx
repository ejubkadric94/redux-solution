import { connect } from 'react-redux';
import { Radio } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Header } from 'antd/lib/layout/layout';

import { AREAS_OF_LAW } from 'Matter/enums';
import { getAreaOfLaw } from 'Matter/model/selectors';
import { setAreaOfLaw } from 'Matter/model/actions';

import './ListHeader.scss';

const ListHeader = ({ onSetAreaOfLaw, areaOfLaw }) => (
  <Header className='header'>
    <Title level={1} className='title'>My Cases</Title>
    <Radio.Group
      onChange={onSetAreaOfLaw}
      value={areaOfLaw}
    >
      {Object.values(AREAS_OF_LAW).map((item, index) => (
        <Radio.Button
          value={item.value}
          key={index}
        >
          {item.label}
        </Radio.Button>
      ))}
    </Radio.Group>
  </Header>
);

const mapStateToProps = (state) => ({
  areaOfLaw: getAreaOfLaw(state),
});

const mapDispatchToProps = dispatch => ({
  onSetAreaOfLaw: (event) => dispatch(setAreaOfLaw(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
