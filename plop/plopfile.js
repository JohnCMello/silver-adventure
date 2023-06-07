module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop
) => {
  plop.setGenerator('atomic-component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'level',
        message: 'What is your component level?',
        choices: [
          {
            name: 'atoms',
            value: 'atoms',
          },
          {
            name: 'molecules',
            value: 'molecules',
          },
          {
            name: 'organisms',
            value: 'organisms',
          },
        ],
      },
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/atomic/{{lowerCase level}}/{{kebabCase name}}/{{kebabCase name}}.tsx',
        templateFile: 'templates/atomic-component/atomic-component.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/atomic/{{lowerCase level}}/{{kebabCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/atomic-component/atomic-component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/atomic/{{lowerCase level}}/{{kebabCase name}}/index.ts',
        templateFile: 'templates/atomic-component/atomic-component-index.ts.hbs',
      },
    ],
  })
  plop.setGenerator('contentful-component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'componentType',
        message: 'What is your component type?',
        choices: [
          {
            name: 'ctf-component',
            value: 'ctf-component',
          },
          {
            name: 'ctf-page-content',
            value: 'ctf-page-content',
          },
        ],
      },
    ],

    actions: (data) => {
      return [
        {
          type: 'add',
          path: '../src/components/contentful/{{ kebabCase componentType }}-{{kebabCase name}}/{{ kebabCase componentType }}-{{kebabCase name}}.tsx',
          templateFile: 'templates/contentful-component/contentful-component.tsx.hbs',
        },
        {
          type: 'add',
          path: '../src/components/contentful/{{ kebabCase componentType }}-{{kebabCase name}}/{{ kebabCase componentType }}-{{kebabCase name}}.graphql',
          templateFile: 'templates/contentful-component/contentful-component.graphql.hbs',
          data: {
            graphqlQueryPrefix: data.componentType === 'ctf-component' ? 'component' : 'pageContent',
          },
        },
        {
          type: 'add',
          path: '../src/components/contentful/{{ kebabCase componentType }}-{{kebabCase name}}/index.ts',
          templateFile: 'templates/contentful-component/contentful-component-index.ts.hbs',
        },
      ]
    },
  })
}
