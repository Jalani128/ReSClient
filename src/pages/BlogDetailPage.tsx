import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogsAPI } from '@/services/api';
import { Link } from 'react-router-dom';

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await blogsAPI.getBySlug(slug);
        setBlog(response.data.data);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Blog not found');
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full border-4 border-gray-300 border-t-gray-600 h-8 w-8 mb-4"></div>
          <p className="text-gray-500">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
        <div className="text-center mb-6">
          <p className="text-gray-500 text-lg">{error}</p>
          <Link 
            to="/blog" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6">
        <div className="text-center">
          <p className="text-gray-500">Blog post not found.</p>
          <Link 
            to="/blog" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-primary"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">{blog.title}</h1>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</span>
          </div>
        </div>
        
        {blog.featuredImage && (
          <div className="mb-6">
            <img 
              src={blog.featuredImage} 
              alt={blog.title} 
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        )}
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-4">{blog.shortDescription}</p>
          <div className="space-y-6" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Related Posts</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Placeholder for related posts - in a real app, you'd fetch these based on tags/categories */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                  alt="Related post" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Related Post Title</h3>
                  <p className="text-gray-600 line-clamp-2">Short description of the related post...</p>
                  <Link 
                    to="#" 
                    className="text-primary font-medium hover:text-primary-dark"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;