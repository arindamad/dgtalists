const _nav = [   
    {
        component: "item",
        name: 'Home',
        to: '/'      
      },
    {
      component: "group",
      name: 'Services', 
      class:"megaMenu", 
      items: [
        {
          component: "item",
          name: 'Custom Software Development',
          to: '/',       
        },      
        {
          component: "item",
          name: 'Custom Web Development',
          to: '/',       
        },
        {
          component: "item",
          name: 'AI Software Development ',
          to: '/',       
        },   
        {
          component: "item",
          name: 'Internet of Things (IOT)',
          to: '/',      
        },
        {
            component: "item",
            name: 'Mobile App Development',
            to: '/',       
        },      
           
      ],
    },    
    {
        component: "item",
        name: 'Case Studies',
        to: '/'      
      },
      {
        component: "group",
        name: 'Company', 
        class:"megaMenu", 
        items: [
          {
            component: "item",
            name: 'About Us',
            to: '/',       
          },      
          {
            component: "item",
            name: 'Partnership And Association ',
            to: '/',       
          },
          {
            component: "item",
            name: 'Core Team',
            to: '/',       
          },
           
          
             
        ],
      },     
    {
      component: "item",
      name: 'Contact Us',         
      to:'/contact-us/'
    }, 
    
  ]
  
  export default _nav
  