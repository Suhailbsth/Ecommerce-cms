export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'data',
      title: 'Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'icon',
              type: 'image',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'bgColor',
              title: 'Background Color',
              type: 'string',
            },
            {
              name: 'categoryId',
              title: 'Category Id',
              type: 'slug',
              options: {
                source: 'label',
              }
            },
          ],
        },
      ],
    },
  ],
}
