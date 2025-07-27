'use client';

import { useState } from 'react';

export default function PanicButton() {
  const [emergencyType, setEmergencyType] = useState('');

  const handlePanic = () => {
    if (!emergencyType) {
      alert('Please select an emergency type.');
      return;
    }

    // Simulate getting live GPS location
    const location = '1.2921° S, 36.8219° E'; // Example: Nairobi coordinates

    // Simulate getting tenant ID
    const tenantId = 'T12345';

    const emergencyCode = emergencyType.toUpperCase();

    const message = `
      EMERGENCY!
      Tenant ID: ${tenantId}
      Location: ${location}
      Emergency Code: ${emergencyCode}
    `;

    // In a real app, you would use an SMS gateway API here.
    console.log('Sending SMS to Landlord, Guard, and Police:');
    console.log(message);
    alert('Emergency alert sent!');
  };

  return (
    <div className="fixed bottom-4 right-4">
      <div className="flex flex-col items-center space-y-2">
        <select
          value={emergencyType}
          onChange={(e) => setEmergencyType(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Emergency</option>
          <option value="fire">Fire</option>
          <option value="theft">Theft</option>
          <option value="medical">Medical</option>
        </select>
        <button
          onClick={handlePanic}
          className="px-4 py-2 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          PANIC
        </button>
      </div>
    </div>
  );
}
