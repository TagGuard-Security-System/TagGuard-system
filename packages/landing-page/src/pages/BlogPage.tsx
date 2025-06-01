// pages/BlogPage.tsx
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Compliance', 'Technology', 'Business', 'Industry News', 'Case Studies'];

  const blogPosts = [
    {
      id: 1,
      title: "5 Key Security Compliance Requirements Every Kenyan Business Must Know",
      excerpt: "Navigate the complex landscape of security regulations in Kenya with our comprehensive guide to mandatory compliance standards, PSIRA requirements, and best practices for maintaining legal operations.",
      category: "Compliance",
      readTime: "8 min read",
      date: "May 28, 2025",
      author: "Sarah Mwangi",
      authorRole: "Compliance Specialist",
      image: "compliance",
      featured: true,
      tags: ["PSIRA", "Regulations", "Kenya", "Compliance"]
    },
    {
      id: 2,
      title: "How Technology is Revolutionizing Security Guard Management in East Africa",
      excerpt: "Discover how modern security companies are leveraging IoT, AI, and mobile technology to enhance guard efficiency, improve client satisfaction, and streamline operations across the region.",
      category: "Technology",
      readTime: "6 min read",
      date: "May 25, 2025",
      author: "James Kipchoge",
      authorRole: "Technology Director",
      image: "technology",
      featured: false,
      tags: ["IoT", "AI", "Mobile Apps", "Innovation"]
    },
    {
      id: 3,
      title: "ROI Analysis: The Financial Impact of Automated Security Management",
      excerpt: "Real case studies showing how Kenyan security companies reduced operational costs by up to 60% through smart automation, digital transformation, and efficient resource allocation.",
      category: "Business",
      readTime: "12 min read",
      date: "May 22, 2025",
      author: "Grace Mutua",
      authorRole: "Business Analyst",
      image: "roi",
      featured: false,
      tags: ["ROI", "Cost Reduction", "Automation", "Case Study"]
    },
    {
      id: 4,
      title: "New PSIRA Guidelines 2025: What Security Companies Need to Know",
      excerpt: "Breaking down the latest PSIRA regulatory updates and their implications for security service providers operating in Kenya. Essential compliance information for industry professionals.",
      category: "Industry News",
      readTime: "5 min read",
      date: "May 20, 2025",
      author: "Michael Ochieng",
      authorRole: "Legal Advisor",
      image: "news",
      featured: false,
      tags: ["PSIRA", "2025 Updates", "Legal", "Industry"]
    },
    {
      id: 5,
      title: "Case Study: How Secure Solutions Ltd Increased Efficiency by 75%",
      excerpt: "A detailed analysis of how one of Nairobi's leading security companies transformed their operations using TagGuard's comprehensive management platform and achieved remarkable results.",
      category: "Case Studies",
      readTime: "10 min read",
      date: "May 18, 2025",
      author: "Patricia Wanjiku",
      authorRole: "Success Manager",
      image: "case-study",
      featured: false,
      tags: ["Success Story", "Efficiency", "Nairobi", "Results"]
    },
    {
      id: 6,
      title: "The Future of Security: Trends Shaping Kenya's Industry in 2025",
      excerpt: "Explore emerging trends in Kenya's security sector, from smart surveillance systems to predictive analytics, and understand how these innovations are reshaping the industry landscape.",
      category: "Technology",
      readTime: "7 min read",
      date: "May 15, 2025",
      author: "David Kimani",
      authorRole: "Industry Analyst",
      image: "future",
      featured: false,
      tags: ["Trends", "Future", "Innovation", "2025"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Compliance': return 'bg-orange-100 text-orange-800';
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Business': return 'bg-green-100 text-green-800';
      case 'Industry News': return 'bg-purple-100 text-purple-800';
      case 'Case Studies': return 'bg-teal-100 text-teal-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImageGradient = (image: string) => {
    switch (image) {
      case 'compliance': return 'from-orange-400 to-red-500';
      case 'technology': return 'from-blue-400 to-indigo-600';
      case 'roi': return 'from-green-400 to-emerald-600';
      case 'news': return 'from-purple-400 to-violet-600';
      case 'case-study': return 'from-teal-400 to-cyan-600';
      case 'future': return 'from-indigo-400 to-purple-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getImageIcon = (image: string) => {
    const iconClass = "w-8 h-8 text-white";
    switch (image) {
      case 'compliance':
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
      case 'technology':
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
      case 'roi':
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
      case 'news':
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 1l4 4v9a2 2 0 01-2 2z" /></svg>;
      case 'case-study':
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
      case 'future':
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      default:
        return <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 1l4 4v9a2 2 0 01-2 2z" /></svg>;
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 1l4 4v9a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Security Insights
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Expert insights, industry trends, and practical guides for Kenya's evolving security landscape. 
              Stay informed with the latest developments in security management and technology.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">150+</div>
                <div className="text-sm text-gray-600">Articles</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">25K+</div>
                <div className="text-sm text-gray-600">Readers</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">Weekly</div>
                <div className="text-sm text-gray-600">Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Search and Filter Section */}
        <div className="mb-12 bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
        </div>

        {/* Featured Post */}
        {filteredPosts.some(post => post.featured) && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
              <div className="ml-3 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Editor's Pick
              </div>
            </div>
            
            {filteredPosts.filter(post => post.featured).map(post => (
              <article key={post.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="md:flex">
                  <div className={`md:w-1/3 h-64 md:h-auto bg-gradient-to-br ${getImageGradient(post.image)} flex items-center justify-center relative`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.5'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>
                    <div className="relative z-10">
                      {getImageIcon(post.image)}
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{post.author}</div>
                          <div className="text-sm text-gray-500">{post.authorRole}</div>
                        </div>
                      </div>
                      
                      <a 
                        href={`/blog/post-${post.id}`}
                        className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                      >
                        <span>Read Article</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* All Articles Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map(post => (
            <article key={post.id} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              {/* Image */}
              <div className={`relative h-48 bg-gradient-to-br ${getImageGradient(post.image)} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.5'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {getImageIcon(post.image)}
                </div>
                
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {post.excerpt.length > 120 ? `${post.excerpt.substring(0, 120)}...` : post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Author and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.author}</div>
                    </div>
                  </div>
                  
                  <a 
                    href={`/blog/post-${post.id}`}
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
                  >
                    <span>Read</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-xl">
            Load More Articles
          </button>
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Stay In The Loop</h3>
          <p className="text-xl text-blue-100 mb-8">
            Get weekly insights delivered to your inbox. Join 5,000+ security professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 placeholder-gray-500 border-2 border-transparent focus:border-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;