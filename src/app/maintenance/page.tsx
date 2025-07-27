'use client';

import { useState } from 'react';

export default function SubmitMaintenanceRequest() {
  const [issueType, setIssueType] = useState('');
  const [priority, setPriority] = useState('medium');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit this data to your backend.
    console.log({
      issueType,
      priority,
      description,
    });
    alert('Maintenance request submitted!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Submit Maintenance Request</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
            Issue Type
          </label>
          <div className="mt-1">
            <select
              id="issueType"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option value="">Select an issue type</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <div className="mt-1">
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <div className="mt-1">
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <label htmlFor="media" className="block text-sm font-medium text-gray-700">
            Attach Photo/Video
          </label>
          <div className="mt-1">
            <input
              type="file"
              id="media"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
            />
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
