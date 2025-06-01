import React from 'react';
import logo from '../assets/Logo.jpg';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-[1440px] max-h-[90vh] overflow-y-auto rounded-lg">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="py-4 px-8 flex justify-between items-center border-b border-gray-200 sticky top-0 bg-white">
            <button onClick={onClose} className="flex items-center gap-2 text-black">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Shipping Address</span>
            </button>
            <div className="w-8">
              <img src={logo} alt="Eclypse" className="h-8" />
            </div>
            <div className="flex gap-8 text-gray-600">
              <a href="/about-us" className="hover:text-black">About Us</a>
              <a href="/waitlist" className="hover:text-black">Waitlist</a>
              <a href="/cart" className="hover:text-black underline">Cart</a>
            </div>
          </header>

          <div className="p-8">
            <div className="grid grid-cols-2 gap-12">
              {/* Left Column - Address Form */}
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  </div>
                  <span className="text-xl text-black">Add New Address</span>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-black">First Name</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block mb-2 text-black">Last Name</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-black">Street Address</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block mb-2 text-black">Apt Number</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block mb-2 text-black">State</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                    <div>
                      <label className="block mb-2 text-black">Zip</label>
                      <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button 
                      type="button" 
                      onClick={onClose}
                      className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 text-black"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900">
                      Save This Address
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column - Order Summary */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="mb-8 text-sm text-gray-600">
                  By placing your order, you agree to our company{' '}
                  <a href="/privacy" className="underline text-black hover:text-gray-800">Privacy policy</a> and{' '}
                  <a href="/terms" className="underline text-black hover:text-gray-800">Conditions of use</a>.
                </div>

                <h2 className="text-2xl mb-6 text-black">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-black">
                    <span>Items - Silhouette No. 1 – Vermilion</span>
                    <span>₹7,999</span>
                  </div>
                  <div className="flex justify-between text-black">
                    <span>Shipping and handling:</span>
                    <span>₹200</span>
                  </div>
                  <div className="flex justify-between text-black">
                    <span>Before tax:</span>
                    <span>₹6,599</span>
                  </div>
                  <div className="flex justify-between text-black">
                    <span>Tax Collected:</span>
                    <span>₹1,400</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-medium mb-8 text-black">
                    <span>Order Total:</span>
                    <span>₹8,199</span>
                  </div>

                  <button className="w-full py-4 bg-black text-white rounded-md hover:bg-[#FF0000] transition-colors">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout; 