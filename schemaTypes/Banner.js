export default {
  name: 'items',
  title: 'Items',
  type: 'document',
  fields: [
    {
      name: 'bannerData',
      title: 'Banner Data',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
}
