import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">Welcome to the Tenant Management System</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/register" className="block p-6 bg-blue-50 border border-blue-200 rounded-lg shadow hover:bg-blue-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Register as a New Tenant</h5>
          <p className="font-normal text-gray-700">Create an account to get started.</p>
        </Link>
        <Link href="/payments" className="block p-6 bg-blue-50 border border-blue-200 rounded-lg shadow hover:bg-blue-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Make a Payment</h5>
          <p className="font-normal text-gray-700">Pay your rent or water bill.</p>
        </Link>
        <Link href="/maintenance" className="block p-6 bg-blue-50 border border-blue-200 rounded-lg shadow hover:bg-blue-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Submit Maintenance Request</h5>
          <p className="font-normal text-gray-700">Report an issue in your unit.</p>
        </Link>
        <Link href="/admin" className="block p-6 bg-blue-50 border border-blue-200 rounded-lg shadow hover:bg-blue-100">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-800">Admin Dashboard</h5>
          <p className="font-normal text-gray-700">Access the landlord's dashboard.</p>
        </Link>
      </div>
    </div>
  );
}
