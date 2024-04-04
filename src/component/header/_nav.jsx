const _nav = [
  {
    component: "item",
    name: 'Home',
    to: '/'
  },
  {
    component: "group",
    name: 'Services',
    class: "megaMenu",
    items: [
      {
        component: "item",
        name: 'Custom Software Development',
        to: '/custom-software-development',
      },
      {
        component: "item",
        name: 'Enterprise Software Development',
        to: '/enterprise-software-development',
      },
      {
        component: "item",
        name: 'Custom Web Development',
        to: '/custom-web-development',
      },
      {
        component: "item",
        name: 'AI Software Development',
        to: '/ai-software-development',
      },
      {
        component: "item",
        name: 'Internet of Things (IOT)',
        to: '/iot',
      },
      {
        component: "item",
        name: 'Mobile App Development',
        to: '/mobile-app-development',
      },
      {
        component: "item",
        name: 'Quality Assurance - Test Engineering',
        to: '/test-engineering',
      },
      {
        component: "item",
        name: 'Digital Marketing',
        to: '/digital-marketing',
      },

    ],
  },
  {
    component: "item",
    name: 'Case Studies',
    to: '/case-study'
  },
  {
    component: "group",
    name: 'Company',
    class: "megaMenu",
    items: [
      {
        component: "item",
        name: 'About Us',
        to: '/about-us',
      },
      {
        component: "item",
        name: 'Partnership And Association',
        to: '/partnership',
      },
      {
        component: "item",
        name: 'Core Team',
        to: '/team',
      },



    ],
  },
  {
    component: "item",
    name: 'Contact Us',
    to: '/contact-us'
  },

]

export default _nav
