// components/BlogPreviewSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreviewSection: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Key Security Compliance Requirements Every Kenyan Business Must Know",
      excerpt: "Navigate the complex landscape of security regulations in Kenya with our comprehensive guide to mandatory compliance standards and best practices.",
      category: "Compliance",
      readTime: "8 min read",
      date: "May 28, 2025",
      author: "Sarah Mwangi",
      image: "compliance",
      trending: true
    },
    {
      id: 2,
      title: "How Technology is Revolutionizing Security Guard Management in East Africa",
      excerpt: "Discover how modern security companies are leveraging IoT, AI, and mobile technology to enhance guard efficiency and client satisfaction.",
      category: "Technology",
      readTime: "6 min read",
      date: "May 25, 2025",
      author: "James Kipchoge",
      image: "technology",
      trending: false
    },
    {
      id: 3,
      title: "ROI Analysis: The Financial Impact of Automated Security Management",
      excerpt: "Real case studies showing how Kenyan security companies reduced operational costs by up to 60% through smart automation and digital transformation.",
      category: "Business",
      readTime: "12 min read",
      date: "May 22, 2025",
      author: "Grace Mutua",
      image: "roi",
      trending: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Compliance': return 'bg-orange-100 text-orange-800';
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Business': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImageGradient = (image: string) => {
    switch (image) {
      case 'compliance': return 'from-orange-400 to-red-500';
      case 'technology': return 'from-blue-400 to-indigo-600';
      case 'roi': return 'from-green-400 to-emerald-600';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getImageIcon = (image: string) => {
    switch (image) {
      case 'compliance':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'technology':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'roi':
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 1l4 4v9a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-xl">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 011 1l4 4v9a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Latest News & Insights
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with expert insights, industry trends, and practical guides 
            for Kenya's evolving security landscape.
          </p>
          
          {/* Stats bar */}
          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Articles Published</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">25K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 ${
                index === 0 ? 'md:col-span-2 md:row-span-1' : ''
              }`}
            >
              {/* Featured image */}
              <div className={`relative h-48 ${index === 0 ? 'md:h-64' : ''} bg-gradient-to-br ${getImageGradient(post.image)} flex items-center justify-center overflow-hidden`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.5'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}></div>
                </div>
                
                {/* Icon */}
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {getImageIcon(post.image)}
                </div>
                
                {/* Trending badge */}
                {post.trending && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    <span>Trending</span>
                  </div>
                )}
                
                {/* Category badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.category)}`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${index === 0 ? 'md:p-8' : ''}`}>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{post.readTime}</span>
                  </span>
                </div>
                
                <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors ${
                  index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>
                
                <p className={`text-gray-600 mb-6 leading-relaxed ${
                  index === 0 ? 'text-lg' : 'text-base'
                }`}>
                  {post.excerpt}
                </p>
                
                {/* Author and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{post.author}</div>
                      <div className="text-xs text-gray-500">Security Expert</div>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/post-${post.id}`} 
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group/link"
                  >
                    <span>Read Article</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl mb-12">
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Never Miss an Update</h3>
            <p className="text-xl text-blue-100">
              Get weekly insights delivered straight to your inbox. Join 5,000+ security professionals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 placeholder-gray-500 border-2 border-transparent focus:border-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4">
            No spam. Unsubscribe anytime. Read by 25,000+ professionals weekly.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-10 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl text-lg"
          >
            <span>Explore All Articles</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          
          <div className="mt-4 text-gray-600">
            <span className="text-sm">Discover 150+ expert articles on security management</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;