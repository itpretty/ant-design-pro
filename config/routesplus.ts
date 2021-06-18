// pro+routes
export default [
  // https://formilyjs.org/
  {
    path: '/formily',
    name: 'formily',
    icon: 'form',
    routes: [
      {
        path: '/formily/linked',
        name: 'linked',
        routes: [
          {
            path: '/formily/linked/one2many',
            name: 'one2many',
            component: './formily/linked/one2many',
          },
          {
            path: '/formily/linked/many2one',
            name: 'many2one',
            component: './formily/linked/many2one',
          },
          {
            path: '/formily/linked/multideps',
            name: 'multideps',
            component: './formily/linked/multideps',
          },
          {
            path: '/formily/linked/chained',
            name: 'chained',
            component: './formily/linked/chained',
          },
          {
            path: '/formily/linked/cyclic',
            name: 'cyclic',
            component: './formily/linked/cyclic',
          },
          {
            path: '/formily/linked/validation',
            name: 'validation',
            component: './formily/linked/validation',
          },
          {
            path: '/formily/linked/validationlinked',
            name: 'validationlinked',
            component: './formily/linked/validationlinked',
          },
          {
            path: '/formily/linked/async',
            name: 'async',
            component: './formily/linked/async',
          },
          {
            path: '/formily/linked/dynamic',
            name: 'dynamic',
            component: './formily/linked/dynamic',
          },
          {
            path: '/formily/linked/arraytable',
            name: 'arraytable',
            component: './formily/linked/arraytable',
          },
          {
            path: '/formily/linked/arraytabledynamic',
            name: 'arraytabledynamic',
            component: './formily/linked/arraytabledynamic',
          },
          {
            path: '/formily/linked/linkoutside',
            name: 'linkoutside',
            component: './formily/linked/linkoutside',
          },
        ],
      },
      {
        path: '/formily/layout',
        name: 'layout',
        routes: [
          {
            path: '/formily/layout/inline',
            name: 'inline',
            component: './formily/layout/inline',
          },
          {
            path: '/formily/layout/complex',
            name: 'complex',
            component: './formily/layout/complex',
          },
          {
            path: '/formily/layout/grid',
            name: 'grid',
            component: './formily/layout/grid',
          },
          {
            path: '/formily/layout/steps',
            name: 'steps',
            component: './formily/layout/steps',
          },
          {
            path: '/formily/layout/tabs',
            name: 'tabs',
            component: './formily/layout/tabs',
          },
          {
            path: '/formily/layout/responsive',
            name: 'responsive',
            component: './formily/layout/responsive',
          },
        ],
      },
    ],
  },

  // Editor
  {
    path: '/editor',
    name: 'editor',
    icon: 'edit',
    routes: [
      {
        path: '/editor/markdown',
        name: 'markdown',
        component: './editor/markdown',
      },
      {
        path: '/editor/braft',
        name: 'braft',
        component: './editor/braft',
      },
    ],
  },
];
