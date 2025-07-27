'use client';

const maintenanceRequests = [
  {
    id: 1,
    issueType: 'Plumbing',
    description: 'Leaky faucet in the kitchen.',
    priority: 'High',
    status: 'Open',
    tenant: 'John Doe',
  },
  {
    id: 2,
    issueType: 'Electrical',
    description: 'Power outlet not working in the bedroom.',
    priority: 'Medium',
    status: 'In Progress',
    technician: 'Jane Smith',
  },
  {
    id: 3,
    issueType: 'General',
    description: 'Broken window latch.',
    priority: 'Low',
    status: 'Completed',
  },
];

export default function Maintenance() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Maintenance Requests</h1>
      <div className="space-y-6">
        {maintenanceRequests.map((request) => (
          <div key={request.id} className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-blue-800">{request.issueType}</h2>
                <p className="text-sm text-gray-600">Priority: {request.priority}</p>
              </div>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  request.status === 'Open'
                    ? 'bg-red-100 text-red-800'
                    : request.status === 'In Progress'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-green-100 text-green-800'
                }`}
              >
                {request.status}
              </span>
            </div>
            <p className="mt-4 text-gray-700">{request.description}</p>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-gray-500">Tenant: {request.tenant}</p>
              {request.technician && (
                <p className="text-sm text-gray-500">Technician: {request.technician}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
