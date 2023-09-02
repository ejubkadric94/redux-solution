import Title from "antd/lib/typography/Title";
import { BackNavigation } from "shared/components";

const DetailsHeader = ({ title }) => {
  return (
    <>
      <BackNavigation />
      <Title level={1} className='title'>{title}</Title>
    </>
  )
};

export default DetailsHeader;
