import React from 'react';

const BlogPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Blog Management</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Blog Posts</h2>
        <p className="text-gray-500">No blog posts found.</p>
      </div>
    </div>
  );
};

export default BlogPage;
