import React from 'react';
import { useSelector } from 'react-redux';

function TotalAmount() {
  // Assuming your state structure has a reducers object which in turn has totalAmount
  const amount = useSelector(state => state.reducers.totalAmount);

  const handleProceedToBuy = () => {
    console.log('Proceeding to buy');
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4">
      <div className="mb-5 mt-2 mx-1">
        <p className="font-bold text-xl">Total: ${amount}</p>
      </div>
      <div className="my-2">
        <button
          type="button"
          onClick={handleProceedToBuy}
          className="relative px-5 py-3 mt-2 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-xl shadow-inner group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 delay-300 bg-gray-600 opacity-0 group-hover:opacity-100"></span>
          <span className="relative transition-colors duration-300 delay-200 group-hover:text-white">
            Proceed To Buy
          </span>
        </button>
      </div>
    </div>
  );
}

export default TotalAmount;
