export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8c3e2df3a82608f726721d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mrhaot8f',
                  apiId: '2f9ccb7e-b67d-49cf-a35a-11431c6d60d0'
                },
                {
                  buildHookId: '5f8c3e2d084e2f61eca8206d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7xik9mr1',
                  apiId: '1cf5ef31-1fe9-4208-bddc-3385d940f2b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MPiotrowska/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7xik9mr1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
