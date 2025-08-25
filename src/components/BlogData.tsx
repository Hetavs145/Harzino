export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  imageUrl: string;
  readTime: number;
  featured: boolean;
}

export const blogCategories = [
  'All',
  'Technology',
  'Design',
  'Innovation',
  'Development',
  'AI & Machine Learning',
  'Business',
  'Lifestyle'
];

export const dummyBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Digital Innovation: Transforming Ideas into Reality',
    excerpt: 'Discover innovative approaches to digital transformation and cutting-edge solutions that bridge creativity with technology.',
    content: `In today's rapidly evolving digital landscape, the ability to transform abstract concepts into tangible, functional solutions has become more crucial than ever. At the intersection of creativity and technology, we find ourselves witnessing unprecedented opportunities for innovation.

The journey from ideation to implementation requires a deep understanding of both human needs and technological capabilities. By leveraging cutting-edge tools and methodologies, we can bridge the gap between what we imagine and what we can actually build.

Key areas of focus include user experience design, scalable architecture, and sustainable development practices. These pillars ensure that our digital solutions not only meet immediate needs but also adapt and evolve with changing requirements.

"Innovation distinguishes between a leader and a follower." - Steve Jobs

As we continue to push the boundaries of what's possible, collaboration between diverse teams becomes essential. The fusion of design thinking, technical expertise, and strategic planning creates a powerful foundation for breakthrough innovations.`,
    author: 'Sarah Chen',
    date: '2024-01-15',
    category: 'Innovation',
    tags: ['digital transformation', 'innovation', 'technology'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=338&fit=crop&auto=format',
    readTime: 8,
    featured: true
  },
  {
    id: '2',
    title: 'Design Systems That Scale: Building for Tomorrow',
    excerpt: 'Explore the intersection of design and technology through comprehensive case studies that showcase successful digital transformations.',
    content: `Design systems have become the backbone of modern digital products. They provide consistency, efficiency, and scalability that organizations need to compete in today's fast-paced market.

A well-crafted design system serves as a single source of truth for design decisions, enabling teams to work more efficiently and maintain brand consistency across all touchpoints.

The key components of a successful design system include:
- Component libraries with clear guidelines
- Design tokens for consistent styling
- Documentation and usage examples
- Governance and maintenance processes

By investing in robust design systems, organizations can reduce development time, improve user experience, and ensure brand consistency across all digital properties.`,
    author: 'Marcus Rodriguez',
    date: '2024-01-12',
    category: 'Design',
    tags: ['design systems', 'ui/ux', 'scalability'],
    imageUrl: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=338&fit=crop&auto=format',
    readTime: 6,
    featured: true
  },
  {
    id: '3',
    title: 'AI-Powered Development: The Next Frontier',
    excerpt: 'Navigate the future of web development with emerging technologies and best practices that shape tomorrow\'s digital experiences.',
    content: `Artificial Intelligence is revolutionizing the way we approach software development. From code generation to automated testing, AI tools are becoming indispensable parts of the modern developer's toolkit.

Machine learning algorithms can now assist in:
- Code completion and generation
- Bug detection and prevention
- Performance optimization
- User experience personalization

The integration of AI in development workflows is not about replacing developers, but rather augmenting their capabilities and allowing them to focus on more creative and strategic aspects of their work.

As we move forward, the developers who embrace these AI-powered tools will have a significant advantage in building more efficient, robust, and innovative solutions.`,
    author: 'Dr. Amanda Foster',
    date: '2024-01-10',
    category: 'AI & Machine Learning',
    tags: ['artificial intelligence', 'development', 'automation'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=338&fit=crop&auto=format',
    readTime: 7,
    featured: true
  },
  {
    id: '4',
    title: 'Responsive Web Design in 2024: Beyond Mobile-First',
    excerpt: 'Learn advanced techniques for scalable architecture, performance optimization, and user-centered design that delivers exceptional results.',
    content: `The concept of responsive design has evolved far beyond simply making websites work on mobile devices. Today's responsive design must account for an ever-expanding array of devices, screen sizes, and interaction methods.

Modern responsive design principles include:
- Container queries for component-based responsiveness
- Advanced CSS Grid and Flexbox techniques
- Progressive enhancement strategies
- Performance optimization across devices
- Accessibility considerations for all users

The goal is to create experiences that feel native to each device while maintaining consistency in branding and functionality. This requires a deep understanding of both technical implementation and user behavior patterns.

By embracing these advanced responsive design techniques, developers can create websites that truly adapt to their users' needs and preferences.`,
    author: 'Jake Thompson',
    date: '2024-01-08',
    category: 'Development',
    tags: ['responsive design', 'css', 'web development'],
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=338&fit=crop&auto=format',
    readTime: 9,
    featured: true
  },
  {
    id: '5',
    title: 'The Psychology of User Interface Design',
    excerpt: 'Understanding cognitive principles that drive effective user interface design and improve user engagement.',
    content: `User interface design is as much about psychology as it is about aesthetics. Understanding how users think, process information, and make decisions is crucial for creating interfaces that truly serve their needs.

Key psychological principles in UI design include:
- Cognitive load theory and information processing
- Visual hierarchy and attention patterns
- Color psychology and emotional responses
- Gestalt principles of perception
- User mental models and expectations

By applying these psychological insights, designers can create interfaces that feel intuitive and natural to use, reducing the learning curve and improving overall user satisfaction.

The most successful interfaces are those that align with users' natural cognitive processes, making complex tasks feel simple and enjoyable.`,
    author: 'Lisa Park',
    date: '2024-01-05',
    category: 'Design',
    tags: ['psychology', 'ui design', 'user experience'],
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=338&fit=crop&auto=format',
    readTime: 10,
    featured: false
  },
  {
    id: '6',
    title: 'Building Sustainable Software Architecture',
    excerpt: 'Strategies for creating software systems that can evolve and scale while maintaining performance and reliability.',
    content: `Sustainable software architecture is about building systems that can grow and evolve over time without becoming technical debt nightmares. It requires careful planning, modular design, and a deep understanding of both current needs and future possibilities.

Key principles of sustainable architecture include:
- Modular design and loose coupling
- Clear separation of concerns
- Scalability planning from day one
- Comprehensive testing strategies
- Documentation and knowledge sharing

The goal is to create systems that remain maintainable and extensible as they grow in complexity and scale. This requires balancing immediate needs with long-term vision, making architectural decisions that support both current functionality and future growth.

By investing in sustainable architecture from the beginning, organizations can avoid costly rewrites and maintain development velocity as their products mature.`,
    author: 'Michael Chen',
    date: '2024-01-03',
    category: 'Technology',
    tags: ['architecture', 'scalability', 'software engineering'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=338&fit=crop&auto=format',
    readTime: 12,
    featured: false
  },
  {
    id: '7',
    title: 'The Art of Visual Storytelling in Digital Media',
    excerpt: 'Explore how visual elements can be used to create compelling narratives that engage and inspire audiences.',
    content: `Visual storytelling has become one of the most powerful tools in digital communication. In an age where attention spans are shrinking and content consumption is increasingly visual, the ability to tell compelling stories through images, graphics, and interactive elements is invaluable.

Effective visual storytelling combines:
- Strong visual hierarchy and composition
- Consistent color palettes and typography
- Interactive elements that enhance the narrative
- Data visualization that makes complex information accessible
- Emotional resonance through carefully chosen imagery

The best visual stories don't just inform—they inspire action, create emotional connections, and leave lasting impressions on their audiences.

Whether you're designing a website, creating marketing materials, or developing an app, understanding the principles of visual storytelling can dramatically improve the impact and effectiveness of your work.`,
    author: 'Emma Rodriguez',
    date: '2024-01-01',
    category: 'Design',
    tags: ['visual design', 'storytelling', 'digital media'],
    imageUrl: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&h=338&fit=crop&auto=format',
    readTime: 8,
    featured: false
  },
  {
    id: '8',
    title: 'Embracing Remote Work: Technology and Culture',
    excerpt: 'How modern organizations are leveraging technology to build strong remote work cultures and maintain productivity.',
    content: `The shift to remote work has fundamentally changed how we think about collaboration, productivity, and workplace culture. Technology has been the enabler of this transformation, but success requires more than just the right tools—it requires a thoughtful approach to culture and communication.

Key elements of successful remote work include:
- Communication tools and protocols
- Project management and collaboration platforms
- Virtual team building and culture initiatives
- Work-life balance considerations
- Performance measurement and feedback systems

Organizations that have successfully embraced remote work understand that it's not just about replicating in-office experiences digitally. It's about creating new ways of working that leverage the unique advantages of distributed teams while addressing the challenges that come with physical separation.

The future of work is likely to be hybrid, combining the best aspects of remote and in-person collaboration.`,
    author: 'David Kumar',
    date: '2023-12-28',
    category: 'Business',
    tags: ['remote work', 'productivity', 'workplace culture'],
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=338&fit=crop&auto=format',
    readTime: 7,
    featured: false
  }
];

export const getFeaturedBlogs = (): BlogPost[] => {
  return dummyBlogs.filter(blog => blog.featured).slice(0, 4);
};

export const getBlogsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return dummyBlogs;
  return dummyBlogs.filter(blog => blog.category === category);
};

export const searchBlogs = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return dummyBlogs.filter(blog => 
    blog.title.toLowerCase().includes(lowercaseQuery) ||
    blog.excerpt.toLowerCase().includes(lowercaseQuery) ||
    blog.content.toLowerCase().includes(lowercaseQuery) ||
    blog.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    blog.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getBlogById = (id: string): BlogPost | undefined => {
  return dummyBlogs.find(blog => blog.id === id);
};