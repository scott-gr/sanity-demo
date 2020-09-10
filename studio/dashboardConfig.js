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
                  buildHookId: '5f5a755bc12b880086502637',
                  title: 'Sanity Studio',
                  name: 'sanity-demo-studio-spp34m3w',
                  apiId: '63fbff96-717a-4f0b-a2e6-d37500508d75'
                },
                {
                  buildHookId: '5f5a755bc7cee500cd972f76',
                  title: 'Blog Website',
                  name: 'sanity-demo',
                  apiId: '663a167c-c3f4-4e78-b9b7-66ba6e533d9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scott-gr/sanity-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-demo.netlify.app', category: 'apps'}
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
