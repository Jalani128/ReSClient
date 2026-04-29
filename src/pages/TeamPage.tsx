import React from 'react';

const TeamPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Team Management</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Team Members</h2>
        <p className="text-gray-500">No team members found.</p>
      </div>
    </div>
  );
};

export default TeamPage;
