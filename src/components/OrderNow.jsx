import React, { useState } from 'react';

function OrderNow() {
  const [totalAmount, setTotalAmount] = useState(0);

  const handleBuyNow = (price) => {
    setTotalAmount(totalAmount + price);
  };

  const handleClearAll = () => {
    setTotalAmount(0);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Order Now</h1>
      <div className="flex flex-wrap justify-around w-full max-w-4xl mb-8">
        <div className="flex flex-col items-center m-4">
            <h1>Yomari</h1>
          <img src="https://www.newar.com.np/wp-content/uploads/2022/01/3-2.jpg" alt="Food 1" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(100)}
          >
            Buy Now - Rs: 150
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Choila</h1>
          <img src="https://sanascarte.com/wp-content/uploads/2023/11/Haku-Choila-TN-Extra-2-1536x864.jpg" alt="Food 2" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(150)}
          >
            Buy Now - Rs: 300
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Sapumicha</h1>
          <img src="https://whatthenepal.com/wp-content/uploads/2024/01/1-2.jpg" alt="Food 3" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(200)}
          >
            Buy Now - Rs: 400
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Chatamari</h1>
          <img src="https://www.shutterstock.com/image-photo/traditional-newari-dish-laa-chatamari-260nw-733748833.jpg" alt="Food 4" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(250)}
          >
            Buy Now - Rs: 100
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Samaybaji</h1>
          <img src="https://cdn.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg?m=facebook" alt="Food 5" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(300)}
          >
            Buy Now - Rs: 300
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Kachila</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYE-qMhL6KZY8fa4D5lrTRaxv5LBDBF11Cw&s" alt="Food 6" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(350)}
          >
            Buy Now - Rs: 350
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Takha</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkrUvYGORx6M0wSdjr33RuRZ3KeXNy9hVTA&s" alt="Food 7" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(400)}
          >
            Buy Now - Rs: 400
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Nhyapu Tisyu</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0zandWWbXPV115yOzpVnGrr-cjVWeAhYWQ&s" alt="Food 8" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(450)}
          >
            Buy Now - Rs: 450
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Aila</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy2w8SoGUVpHtuoKHi9aHbm_1-zIG4VP3HQ&s" alt="Food 9" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(500)}
          >
            Buy Now - Rs: 500
          </button>
        </div>
        <div className="flex flex-col items-center m-4">
            <h1>Thow</h1>
          <img src="https://i.pinimg.com/474x/fe/5e/a0/fe5ea0de78d12ec31c1911cbc8b456c7.jpg" alt="Food 10" className="w-36 h-36 object-cover mb-4" />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => handleBuyNow(550)}
          >
            Buy Now - Rs: 550
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Total Amount: Rs: {totalAmount}</h2>
      </div>
      <button
        className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
        onClick={handleClearAll}
      >
        Clear All Orders
      </button>
    </div>
  );
}

export default OrderNow;