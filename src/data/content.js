export const services = [
  { icon: 'PanelsTopLeft', title: 'Web applications', description: 'Purpose-built platforms that make complex work feel simple.', category: 'Build' },
  { icon: 'Smartphone', title: 'Mobile experiences', description: 'Useful, reliable apps for the people who depend on them.', category: 'Build' },
  { icon: 'Blocks', title: 'Business systems', description: 'Connected workflows for the work behind your business.', category: 'Operate' },
  { icon: 'BrainCircuit', title: 'AI & automation', description: 'Practical intelligence that helps teams see and do more.', category: 'Advance' },
  { icon: 'PenTool', title: 'Product design', description: 'Clear interfaces grounded in user needs and business goals.', category: 'Design' },
  { icon: 'CloudCog', title: 'Cloud & integration', description: 'Dependable infrastructure and connected tools that scale.', category: 'Connect' },
]

export const solutions = [
  { name: 'Operations', description: 'Bring inventory, people, and processes into one clear view.', items: ['Inventory', 'HR workflows', 'Reporting'] },
  { name: 'Commerce', description: 'Make every order, payment, and customer interaction easier to manage.', items: ['Retail', 'E-commerce', 'Customer management'] },
  { name: 'Sector platforms', description: 'Fit the software to the way your organization actually works.', items: ['Education', 'Restaurants', 'Professional services'] },
]

// Concept studies show possible product directions; they are not client projects.
export const projects = [
  { title: 'Unified operations', category: 'Management Systems', description: 'A concept for bringing daily activity, inventory, and reporting into one workspace.', stack: ['React', 'Django', 'PostgreSQL'], type: 'operations' },
  { title: 'Commerce, connected', category: 'Web', description: 'A storefront and operations concept designed around a seamless order journey.', stack: ['React', 'Node.js'], type: 'commerce' },
  { title: 'Insight engine', category: 'AI', description: 'An exploration of turning operational data into useful decisions.', stack: ['Python', 'AI / ML'], type: 'insights' },
]

export const technology = [
  { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript'] },
  { category: 'Backend', items: ['Python', 'Django', 'Node.js'] },
  { category: 'Mobile', items: ['Flutter'] },
  { category: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis'] },
  { category: 'Cloud & delivery', items: ['Docker', 'AWS', 'Git'] },
  { category: 'Intelligence', items: ['AI / ML', 'OpenCV'] },
]

export const process = [
  ['01', 'Discover', 'Understand the people, goals, and constraints.'],
  ['02', 'Plan', 'Define a useful path and a clear scope.'],
  ['03', 'Design', 'Shape a product people can navigate with confidence.'],
  ['04', 'Build', 'Develop, integrate, and refine the system.'],
  ['05', 'Validate', 'Test the details that matter in real use.'],
  ['06', 'Launch', 'Deploy with care and prepare the next iteration.'],
]

export const industries = ['Education', 'Retail & commerce', 'Restaurants', 'Healthcare', 'Finance', 'Logistics', 'Professional services', 'Organizations']

export const navigation = [
  ['Home', '/'], ['Services', '/services'], ['Solutions', '/solutions'], ['Projects', '/projects'],
  ['About', '/about'], ['Technology', '/technology'], ['Insights', '/insights'], ['Contact', '/contact'],
]
