import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
const AdminDashboard = () => {
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalComments, setTotalComments] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const userResponse = await axios.get('http://localhost:8080/userCount');
                setTotalCustomers(userResponse.data);

                const productResponse = await axios.get('http://localhost:8080/plans/planCount');
                setTotalProducts(productResponse.data);

                const commentResponse = await axios.get('http://localhost:8080/contactCount');
                setTotalComments(commentResponse.data);
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        };

        fetchCounts();
    }, []);
  return (
    <div className="min-h-[90.25vh] bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white">
            <div className="flex">
                <aside className="w-1/4 bg-gray-800 p-6 h-[90.25vh]">
                    <nav className="space-y-4">
                        <Link to="/manageusers" className="block py-2 px-4 rounded hover:bg-gray-700">Manage User Details</Link>
                        <Link to="/manageplans" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Plan Details</Link>
                        <Link to="/managequeries" className="block py-2 px-4 rounded hover:bg-gray-700">Manage Consumer Queries</Link>
                    </nav>
                </aside>
                <main className="w-3/4 p-6">
                    <h1 className="text-3xl font-semibold mb-6 ">Admin Dashboard</h1>
                    <div className="grid grid-cols-3 gap-6 text-center">
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg" >
                            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Total Customers</h2>
                            <p className="text-5xl font-bold">{totalCustomers}</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Total Plans</h2>
                            <p className="text-5xl font-bold">{totalProducts}</p>
                        </div>
                        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Total Queries</h2>
                            <p className="text-5xl font-bold">{totalComments}</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
  )
}

export default AdminDashboard