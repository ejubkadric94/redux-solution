import { connect } from 'react-redux';
import { Radio } from 'antd';
import { useState } from 'react';
import Title from 'antd/lib/typography/Title';
import { Header } from 'antd/lib/layout/layout';

import { AREAS_OF_LAW } from 'Matter/enums';

import './ListHeader.scss'

const ListHeader = () => {
  const [radioValue, setRadioValue] = useState(AREAS_OF_LAW.ALL.value);

  const setRadioValueFunction = (e) => {
    setRadioValue(e.target.value);
  }

  return (
    <Header className='header'>
      <Title level={1} className='title'>My Cases</Title>
      <Radio.Group
        onChange={setRadioValueFunction}
        value={radioValue}
      >
        {Object.values(AREAS_OF_LAW).map(item => (
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListHeader);
