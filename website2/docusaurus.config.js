module.exports = {
  title: 'ManTorch',
  tagline: 'Optimization on Manifolds and Constrained Optimization in Pytorch',
  url: 'https://mantorch.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'lezcano', // Usually your GitHub org/user name.
  projectName: 'mantorch', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ManTorch',
      logo: {
        alt: 'ManTorch',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Introduction',
          position: 'left',
        },
        {to: '${baseUrl}api/', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/lezcano/mantorch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: 'docs/introduction',
            },
            {
              label: 'Documentation',
              to: '${baseUrl}api/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lezcano/mantorch',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mario Lezcano Casado. Built with Docusaurus.`,
    },
  },
  scripts: [
    // Github buttons
    'https://buttons.github.io/buttons.js',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./static/js/sidebars.js'),
          editUrl:
            'https://github.com/lezcano/mantorch/edit/master/website/',
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
