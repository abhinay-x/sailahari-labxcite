// Mock/placeholder data for development when CMS is not available
import { Product, Service, AboutContent } from './api'

export const mockProducts: Product[] = [
  {
    id: 1,
    slug: 'premium-distribution-solution',
    name: 'Premium Distribution Solution',
    description: 'A comprehensive distribution solution designed to streamline your supply chain operations. Features real-time tracking, automated routing, and seamless integration capabilities.',
    specifications: '<ul><li>Real-time tracking and monitoring</li><li>Automated route optimization</li><li>Multi-channel integration</li><li>Advanced analytics dashboard</li></ul>',
    featured: true,
    category: {
      id: 1,
      name: 'Distribution',
      slug: 'distribution',
    },
  },
  {
    id: 2,
    slug: 'logistics-management-system',
    name: 'Logistics Management System',
    description: 'End-to-end logistics management platform that helps you optimize warehouse operations, manage inventory, and coordinate deliveries efficiently.',
    specifications: '<ul><li>Warehouse management</li><li>Inventory tracking</li><li>Delivery coordination</li><li>Performance analytics</li></ul>',
    featured: true,
    category: {
      id: 2,
      name: 'Logistics',
      slug: 'logistics',
    },
  },
  {
    id: 3,
    slug: 'partnership-platform',
    name: 'Partnership Platform',
    description: 'Connect with trusted partners and expand your business network. Our platform facilitates seamless collaboration and partnership management.',
    specifications: '<ul><li>Partner directory</li><li>Collaboration tools</li><li>Contract management</li><li>Performance tracking</li></ul>',
    featured: true,
    category: {
      id: 3,
      name: 'Partnerships',
      slug: 'partnerships',
    },
  },
  {
    id: 4,
    slug: 'supply-chain-optimizer',
    name: 'Supply Chain Optimizer',
    description: 'AI-powered supply chain optimization tool that reduces costs, improves efficiency, and minimizes waste across your entire supply network.',
    specifications: '<ul><li>AI-powered optimization</li><li>Cost reduction analysis</li><li>Waste minimization</li><li>Predictive analytics</li></ul>',
    featured: true,
    category: {
      id: 1,
      name: 'Distribution',
      slug: 'distribution',
    },
  },
  {
    id: 5,
    slug: 'fleet-management',
    name: 'Fleet Management System',
    description: 'Complete fleet management solution for tracking vehicles, optimizing routes, and managing driver performance.',
    specifications: '<ul><li>GPS tracking</li><li>Route optimization</li><li>Driver management</li><li>Fuel efficiency monitoring</li></ul>',
    featured: false,
    category: {
      id: 2,
      name: 'Logistics',
      slug: 'logistics',
    },
  },
  {
    id: 6,
    slug: 'inventory-control',
    name: 'Advanced Inventory Control',
    description: 'Smart inventory management system with automated reordering, demand forecasting, and real-time stock levels.',
    specifications: '<ul><li>Automated reordering</li><li>Demand forecasting</li><li>Real-time updates</li><li>Multi-location support</li></ul>',
    featured: false,
    category: {
      id: 2,
      name: 'Logistics',
      slug: 'logistics',
    },
  },
]

export const mockServices: Service[] = [
  {
    id: 1,
    title: 'Distribution Services',
    overview: 'We provide comprehensive distribution services that ensure your products reach customers efficiently and on time. Our network spans across multiple regions, offering reliable delivery solutions.',
    slug: 'distribution-services',
  },
  {
    id: 2,
    title: 'Logistics Solutions',
    overview: 'Our logistics solutions optimize your supply chain operations, reducing costs and improving efficiency. From warehouse management to transportation coordination, we handle it all.',
    slug: 'logistics-solutions',
  },
  {
    id: 3,
    title: 'Partnership Management',
    overview: 'Build and manage strategic partnerships with our comprehensive partnership management services. We facilitate connections and help you grow your business network.',
    slug: 'partnership-management',
  },
  {
    id: 4,
    title: 'Supply Chain Consulting',
    overview: 'Get expert advice on optimizing your supply chain. Our consultants analyze your operations and provide strategic recommendations for improvement.',
    slug: 'supply-chain-consulting',
  },
  {
    id: 5,
    title: 'Warehouse Solutions',
    overview: 'State-of-the-art warehouse management solutions with real-time tracking, automated systems, and efficient storage optimization.',
    slug: 'warehouse-solutions',
  },
  {
    id: 6,
    title: 'Transportation Services',
    overview: 'Reliable transportation services with a modern fleet, experienced drivers, and advanced tracking systems for complete visibility.',
    slug: 'transportation-services',
  },
]

export const mockAboutContent: AboutContent = {
  background: `
    <p>Founded with a vision to revolutionize distribution and logistics, Sailahari has been at the forefront of innovation in the supply chain industry for over a decade. We started as a small team of passionate professionals committed to solving complex logistics challenges.</p>
    <p class="mt-4">Over the years, we've grown into a trusted partner for businesses of all sizes, helping them streamline operations, reduce costs, and improve customer satisfaction. Our commitment to excellence and continuous innovation has earned us recognition as industry leaders.</p>
    <p class="mt-4">Today, we operate across multiple regions, serving clients from various industries. Our team of experts brings decades of combined experience in distribution, logistics, and supply chain management, ensuring that our clients receive the best possible solutions.</p>
  `,
  vision: 'To become the world\'s most trusted and innovative partner in distribution and logistics, transforming how businesses connect with their customers through seamless supply chain solutions.',
  mission: 'To empower businesses with cutting-edge distribution and logistics solutions that drive efficiency, reduce costs, and create lasting value for our clients and their customers.',
  values: [
    'Excellence in Service',
    'Innovation & Technology',
    'Integrity & Trust',
    'Customer Centricity',
    'Sustainability',
    'Continuous Improvement',
  ],
}

