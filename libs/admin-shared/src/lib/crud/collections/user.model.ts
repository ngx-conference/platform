export const UserModel = {
  icon: 'fa fa-fw fa-beer',
  id: 'Users',
  name: 'Users',
  properties: {
    name: {
      id: 'name',
      type: 'string',
      visible: 'true',
    },
    id: {
      required: true,
      type: 'string',
    },
    avatar: {
      id: 'name',
      type: 'string',
      visible: 'true',
    },
  },
  fields: [
    {
      label: 'Name',
      key: 'name',
      type: 'string',
      link: true,
    },
    {
      label: 'Avatar',
      key: 'avatar',
      type: 'string',
      headerClass: 'w-25 text-right',
      columnClass: 'text-right',
    },
  ],
}
