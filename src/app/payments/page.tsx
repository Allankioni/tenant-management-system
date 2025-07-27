'use client';

import { useState } from 'react';

export default function Payments() {
  const [paymentCategory, setPaymentCategory] = useState('rent');
  const [paymentFrequency, setPaymentFrequency] = useState('monthly');

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Payments</h1>
      <div className="space-y-6">
        <div>
          <label htmlFor="paymentCategory" className="block text-sm font-medium text-gray-700">
            Payment Category
          </label>
          <div className="mt-1">
            <select
              id="paymentCategory"
              value={paymentCategory}
              onChange={(e) => setPaymentCategory(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option value="rent">Rent Only</option>
              <option value="water">Water Bill Only</option>
              <option value="combined">Combined Rent + Water Bill</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="paymentFrequency" className="block text-sm font-medium text-gray-700">
            Payment Frequency
          </label>
          <div className="mt-1">
            <select
              id="paymentFrequency"
              value={paymentFrequency}
              onChange={(e) => setPaymentFrequency(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option value="monthly">Monthly</option>
              <option value="half-month">Half-Month</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-center">Schedule Payment</h2>
          {/* Calendar view for scheduling will be implemented here */}
          <div className="p-4 border border-gray-200 rounded-md mt-2 text-center">
            <p>Calendar placeholder</p>
          </div>
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Pay with M-Pesa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
