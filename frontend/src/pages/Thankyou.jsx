
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
const Thankyou = () => {
    const location = useLocation();
    const { planName, planAmount } = location.state || {};
    const { user } = useContext(UserContext);
  return (
    <div>
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 flex items-center justify-center p-6 h-screen">
                <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
                    {/* Header */}
                    <header className="text-center mb-6">
                        <h1 className="text-2xl font-semibold text-gray-800">Thank You for Your Purchase!</h1>
                        <p className="text-gray-600">We appreciate your business and look forward to serving you.</p>
                    </header>

                    {/* Thank You Message */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Order Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">User Details</span>
                            <span className="font-semibold text-gray-800">{user.firstName || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-600">Plan Name</span>
                            <span className="font-semibold text-gray-800">{planName || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Plan Amount</span>
                            <span className="font-semibold text-gray-800">&#8377;{planAmount || '0.00'}</span>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="text-center">
                        <p className="text-gray-600">Your package will be delivered soon. If you have any questions, please contact our support team.</p>
                    </div>

                    {/* Return to Home Page */}
                    <div className="text-center mt-6">
                        <a href="/" className="text-purple-950 hover:underline">Return to Home Page</a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Thankyou