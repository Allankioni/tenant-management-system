import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Total Payments</h5>
          <p className="font-normal text-gray-700 text-3xl">$10,500</p>
        </div>
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Pending Balances</h5>
          <p className="font-normal text-gray-700 text-3xl">$2,300</p>
        </div>
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Water Consumption</h5>
          <p className="font-normal text-gray-700 text-3xl">1,200 L</p>
        </div>
        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Occupancy</h5>
          <p className="font-normal text-gray-700 text-3xl">15/20 Units</p>
        </div>
        <Link href="/admin/maintenance" className="block p-6 bg-blue-50 border border-blue-200 rounded-lg shadow hover:bg-blue-100 col-span-1 md:col-span-2 lg:col-span-3">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Maintenance Requests</h5>
          <p className="font-normal text-gray-700">View and manage maintenance requests.</p>
        </Link>
      </div>
    </div>
  );
}
