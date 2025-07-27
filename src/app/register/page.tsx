'use client';

import { useState } from 'react';

export default function Register() {
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [hasChildren, setHasChildren] = useState('no');

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Tenant Registration</h1>
      <form className="space-y-6">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="houseNumber" className="block text-sm font-medium text-gray-700">
              House Number
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="houseNumber"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700">
              ID Number
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="idNumber"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="phoneNumber"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
              Marital Status
            </label>
            <div className="mt-1">
              <select
                id="maritalStatus"
                value={maritalStatus}
                onChange={(e) => setMaritalStatus(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            </div>
          </div>
        </div>

        {maritalStatus === 'married' && (
          <div className="space-y-6 p-6 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold text-center">Spouse Details</h2>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="spouseName" className="block text-sm font-medium text-gray-700">
                  Spouse Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="spouseName"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="spouseId" className="block text-sm font-medium text-gray-700">
                  Spouse ID
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="spouseId"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="spousePhone" className="block text-sm font-medium text-gray-700">
                  Spouse Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="spousePhone"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="children" className="block text-sm font-medium text-gray-700">
              Children
            </label>
            <div className="mt-1">
              <select
                id="children"
                value={hasChildren}
                onChange={(e) => setHasChildren(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
          </div>

          {hasChildren === 'yes' && (
            <div className="sm:col-span-1">
              <label htmlFor="numberOfChildren" className="block text-sm font-medium text-gray-700">
                Number of Children
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="numberOfChildren"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="initialDeposit" className="block text-sm font-medium text-gray-700">
            Initial Deposit
          </label>
          <div className="mt-1">
            <input
              type="number"
              id="initialDeposit"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
