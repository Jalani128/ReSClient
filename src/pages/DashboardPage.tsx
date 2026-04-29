import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import PageTransition from '../components/common/PageTransition';

const DashboardPage: React.FC = () => {
  useSEO({ title: 'Dashboard - BuildEstate Admin' });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <PageTransition className="min-h-screen bg-[#F8F6F6]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E3192] to-[#B86851] flex items-center justify-center">
                <span className="text-white font-fraunces font-bold text-lg">B</span>
              </div>
              <span className="font-fraunces text-xl font-bold text-[#2E3192]">Admin Dashboard</span>
            </div>
            <button
              onClick={handleLogout}
              className="font-manrope text-sm text-[#6B7280] hover:text-[#B86851] transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="font-fraunces text-3xl font-bold text-[#2E3192] mb-2">Welcome back, Admin</h1>
          <p className="font-manrope text-[#6B7280]">Manage your real estate properties and team members</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#2E3192]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#2E3192]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <span className="font-manrope text-sm text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full">Live</span>
            </div>
            <p className="font-manrope text-sm text-[#6B7280] mb-1">Total Properties</p>
            <p className="font-fraunces text-3xl font-bold text-[#1F2937]">0</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#B86851]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#B86851]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="font-manrope text-sm text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-full">Active</span>
            </div>
            <p className="font-manrope text-sm text-[#6B7280] mb-1">Team Members</p>
            <p className="font-fraunces text-3xl font-bold text-[#1F2937]">0</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-manrope text-sm text-[#3B82F6] bg-[#3B82F6]/10 px-3 py-1 rounded-full">Draft</span>
            </div>
            <p className="font-manrope text-sm text-[#6B7280] mb-1">Blog Posts</p>
            <p className="font-fraunces text-3xl font-bold text-[#1F2937]">0</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="font-manrope text-sm text-[#8B5CF6] bg-[#8B5CF6]/10 px-3 py-1 rounded-full">Pending</span>
            </div>
            <p className="font-manrope text-sm text-[#6B7280] mb-1">Appointments</p>
            <p className="font-fraunces text-3xl font-bold text-[#1F2937]">0</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/properties"
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#2E3192]/20 transition-all group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E3192] to-[#B86851] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-fraunces font-bold text-[#1F2937]">Properties</h3>
                <p className="font-manrope text-sm text-[#6B7280]">Manage listings</p>
              </div>
            </div>
            <p className="font-manrope text-sm text-[#9CA3AF]">View and manage all property listings</p>
          </a>

          <a
            href="/team"
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#2E3192]/20 transition-all group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-fraunces font-bold text-[#1F2937]">Team</h3>
                <p className="font-manrope text-sm text-[#6B7280]">Manage team members</p>
              </div>
            </div>
            <p className="font-manrope text-sm text-[#9CA3AF]">Add, edit, view team members</p>
          </a>

          <a
            href="/blogs"
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#2E3192]/20 transition-all group"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-fraunces font-bold text-[#1F2937]">Blogs</h3>
                <p className="font-manrope text-sm text-[#6B7280]">Manage blog posts</p>
              </div>
            </div>
            <p className="font-manrope text-sm text-[#9CA3AF]">Create and manage blog articles</p>
          </a>
        </div>
      </main>
    </PageTransition>
  );
};

export default DashboardPage;
