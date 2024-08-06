import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const location = useLocation();
    const { plan } = location.state || {};
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/thankyou', {
            state: {
                planName: plan?.name,
                planAmount: plan?.amount
            }
        });
    };
    const handleCancelPayment = () => {
        alert("Your transaction is cancelled");
        navigate('/products');
    };

    return (
        <div>
            <div className="bg-gradient-to-b from-black via-gray-950 to-gray-900 flex items-center justify-center p-6 h-[700px]">
                <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
                    <header className="text-center mb-4">
                        <h1 className="text-2xl font-semibold text-gray-800">Secure Payment</h1>
                        <p className="text-gray-600">Complete your purchase securely</p>
                    </header>
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Card Number</label>
                            <input 
                                type="text" 
                                id="cardNumber" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="1234 5678 9012 3456" 
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                            />
                        </div>

                        <div className="mb-4 flex space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="expiryDate" className="block text-gray-700 font-medium mb-2">Expiry Date</label>
                                <input 
                                    type="text" 
                                    id="expiryDate" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="MM/YY" 
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="cvv" className="block text-gray-700 font-medium mb-2">CVV</label>
                                <input 
                                    type="text" 
                                    id="cvv" 
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="123" 
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="cardholderName" className="block text-gray-700 font-medium mb-2">Cardholder Name</label>
                            <input 
                                type="text" 
                                id="cardholderName" 
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="John Doe" 
                                value={cardholderName}
                                onChange={(e) => setCardholderName(e.target.value)}
                            />
                        </div>
                        {plan && (
                            <div className="mb-6">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Payment Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Plan Name</span>
                                    <span className="font-semibold text-gray-800">{plan.name}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-gray-600">Plan Amount</span>
                                    <span className="font-semibold text-gray-800">&#8377;{plan.amount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Total</span>
                                    <span className="font-semibold text-gray-800">&#8377;{plan.amount}</span>
                                </div>
                            </div>
                        )}
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        >
                            Complete Payment
                        </button>
                        <button 
                            type="submit" 
                            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300 mt-3"
                            onClick={handleCancelPayment}
                        >
                            Cancel Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment;
