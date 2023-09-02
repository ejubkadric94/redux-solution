export const AREAS_OF_LAW = {
  ALL: {
    label: 'Alle',
    value: undefined,
  },
  LABOR: {
    label: 'Arbeitsrecht',
    value: 'Arbeitsrecht',
  },
  TAX: {
    label: 'Steuerrecht',
    value: 'Steuerrecht',
  },
  SOCIAL: {
    label: 'Sozialrecht',
    value: 'Sozialrecht',
  },
};

export const MATTERS_TABLE_COLUMNS = [
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Case Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Area Of Law',
    dataIndex: 'areaOfLaw',
    key: 'areaOfLaw',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
];

export const MATTER_DETAILS_TABLE_COLUMNS = [
  {
    title: 'Task Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
];

export const MATTER_URL = process.env.REACT_APP_MATTER_URL;
