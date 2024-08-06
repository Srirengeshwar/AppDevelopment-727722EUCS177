import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const { plan, phoneNumber } = location.state || {};

    const handleProceedToPayment = () => {
        navigate('/payment', { state: { plan, phoneNumber} });
    };

    return (
        <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 min-h-screen flex flex-col">
            <div className="flex flex-col items-center justify-center flex-1 p-6 ">
                <div className="container mx-auto p-4 w-[700px] bg-white text-black rounded-lg shadow-lg">
                    <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">Check Your Plan Details</h1>
                    {plan ? (
                        <div>
                        <div className="flex pace-y-4 gap-3 bg-gray-100 rounded-lg shadow-md">
                            <div className="p-6 w-[50%]">
                                <p className="text-gray-700 text-lg mb-1">Phone Number: <span className="font-bold">{phoneNumber}</span></p>
                                <p className="text-gray-700 text-lg mb-4">User Details: <span className="font-bold">{user.firstName}</span></p>
                            </div>
                            <div className="p-6  w-[50%]">
                                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{plan.name}</h2>
                                <p className="text-gray-700 text-lg mb-1">Price: <span className="font-bold">&#8377;{plan.amount}</span></p>
                                <p className="text-gray-700 text-lg mb-1">Validity: <span className="font-bold">{plan.validity}</span></p>
                                <p className="text-gray-700 text-lg mb-4">Data: <span className="font-bold">{plan.data} GB</span></p>
                            </div>
                        </div>
                            <div className="text-center mt-8">
                                <button 
                                    onClick={handleProceedToPayment}
                                    className="w-full bg-purple-950 text-white py-3 rounded-lg hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    ) : (
                        <p className="text-center text-gray-400 text-lg">No plan selected</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Checkout;