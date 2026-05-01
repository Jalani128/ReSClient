import React, { useState, useEffect } from 'react';
import { teamAPI } from '@/services/api';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const response = await teamAPI.getAll();
        setTeamMembers(response.data.data);
      } catch (err) {
        console.error('Error fetching team members:', err);
        setError('Failed to load team members');
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h1>
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full border-4 border-gray-300 border-t-gray-600 h-8 w-8"></div>
          <p className="mt-4 text-gray-500">Loading team members...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h1>
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
        <div className="text-center py-12">
          <p className="text-gray-500">Unable to load team members. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h1>
      <p className="text-gray-600 mb-8">Meet the experts behind our success</p>
      
      {teamMembers.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No team members found.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member: any) => (
            <div key={member._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                {member.profileImage && (
                  <img 
                    src={member.profileImage} 
                    alt={`${member.name}'s profile`} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-200">{member.designation}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{member.bio}</p>
                {member.socialLinks && (
                  <div className="flex gap-3">
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.353V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.35 0-2.186-1.09-2.186-2.443s.836-2.443 2.186-2.443 2.186 1.09 2.186 2.443-.836 2.443-2.186 2.443zm1.782 13.019H3.555V9h3.564v11.452zM20.447 5.852h-3.554V4.002c0-2.422-1.55-4.059-3.776-4.059-2.255 0-3.53 1.594-3.741 2.106-.122.294-.148.68-.084 1.01l-.148 2.874H9.166V9h3.446v1.152c0 .291.041.843.307 1.34.77 1.413 2.02 2.23 3.373 2.23 3.045 0 4.332-1.887 4.332-4.604v-.08z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M20 4.41c-.74.33-1.23.51-1.55.56-.69-.41-1.28-.94-1.42-1.68C16.9 2.4 15.4 2 13.7 2c-3.06 0-5.54 2.48-5.54 5.54 0 .43.05.85.14 1.26-4.61-.23-8.7-2.44-11.16-5.82-.34.59-.34 1.25-.02 1.75-3.79-.41-7.15-2-9.54-4.76-.2.35-.31.75-.31 1.18 0 1.92.7 3.62 1.76 4.91-.16-.05-.34-.07-.52-.07-.1 0-.19.03-.29.08.58 1.8 2.26 3.12 4.3 3.16-3.38 2.65-6.17 4.32-8.23 4.32-.54 0-1.06-.02-1.57-.06 1.16.36 2.18.68 3.09 1.11-1.08.85-1.72 1.99-1.91 3.31-.16.11-.32.17-.48.18-.58 1-1.05 1.93-1.05 2.96 0 2.3 1.65 4.22 3.83 4.28-.41.09-.83.14-1.25.14-.31 0-.61-.03-.91-.08z"/>
                        </svg>
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a 
                        href={member.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm8.1-9.05l-1.38 2.35a1 1 0 01-1.28 0l-.9-1.54a1 1 0 111.68-.98l1.39 2.36 2.35-1.38a1 1 0 01.98 1.68l-1.54.9a1 1 0 01-.98-1.68zM10 6a4 4 0 110-8 4 4 0 010 8z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamPage;