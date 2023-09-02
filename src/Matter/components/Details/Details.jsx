import { Content } from "antd/lib/layout/layout";
import { Layout, Table } from "antd";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import DetailsHeader from "./DetailsHeader";
import { MATTER_DETAILS_TABLE_COLUMNS } from "Matter/enums";

const Details = () => {
  let { id } = useParams();
  const tasks = [
    {
        "_id": 1,
        "title": "Push blue pill",
        "status": "done"
    },
    {
        "_id": 2,
        "title": "Find white pill",
        "status": "done"
    },
    {
        "_id": 3,
        "title": "Erase blue cable",
        "status": "created"
    },
    {
        "_id": 4,
        "title": "Connect yellow network",
        "status": "inProgress"
    },
    {
        "_id": 5,
        "title": "Find white socket",
        "status": "inProgress"
    },
    {
        "_id": 6,
        "title": "Cut red cable",
        "status": "inProgress"
    },
    {
        "_id": 7,
        "title": "Cut white cable",
        "status": "created"
    },
    {
        "_id": 8,
        "title": "Connect yellow cable",
        "status": "created"
    },
    {
        "_id": 9,
        "title": "Erase blue cable",
        "status": "inProgress"
    }
  ]
  return (
    <Layout style={{ backgroundColor: 'transparent' }}>
      <DetailsHeader title={tasks[0].title} />
      <Content>
        <Table
          columns={MATTER_DETAILS_TABLE_COLUMNS}
          dataSource={tasks}
          pagination={false}
        />
      </Content>
    </Layout>
  )
};

export default Details;
