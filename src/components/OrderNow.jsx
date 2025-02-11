import React, { useState } from 'react';

function OrderNow() {
  const [totalAmount, setTotalAmount] = useState(0);

  const handleOrderNow = (price) => {
    setTotalAmount(totalAmount + price);
  };

  const handleClearAll = () => {
    setTotalAmount(0);
  };

  const handleOrderAll = () => {
    // Handle order all logic here
    console.log('Order All clicked');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center p-8 bg-center bg-fixed"
      style={{ backgroundImage: "url('https://files.oaiusercontent.com/file-GAZf5cN2coViCmr5ud5Wf6?se=2025-02-11T08%3A19%3A11Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D9f546c67-ffaa-4704-adc9-63097f3e8667.webp&sig=iAXgn3f8%2BTa%2BdhYEbXJCugnvMCafMF0KOg7uWcPQH7I%3D')",}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Order Now</h1>
        <div className="flex flex-wrap justify-around w-full max-w-4xl mb-8">
          <div className="flex flex-col items-center m-4">
            <img src="https://www.newar.com.np/wp-content/uploads/2022/01/3-2.jpg" alt="Food 1" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Yomari</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(150)}
            >
              Order Now - Rs: 150
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://sanascarte.com/wp-content/uploads/2023/11/Haku-Choila-TN-Extra-2-1536x864.jpg" alt="Food 2" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Choila</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(300)}
            >
              Order Now - Rs: 300
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://whatthenepal.com/wp-content/uploads/2024/01/1-2.jpg" alt="Food 3" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Sapumicha (Buffalo Intestines)</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(400)}
            >
              Order Now - Rs: 400
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://www.shutterstock.com/image-photo/traditional-newari-dish-laa-chatamari-260nw-733748833.jpg" alt="Food 4" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Chatamari (Nepalese rice crepe)</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(100)}
            >
              Order Now - Rs: 100
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://cdn.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg?m=facebook" alt="Food 5" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Samaybaji(Newari food platter)</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(300)}
            >
              Order Now - Rs: 300
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYE-qMhL6KZY8fa4D5lrTRaxv5LBDBF11Cw&s" alt="Food 6" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Raw Minced Meat</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(350)}
            >
              Order Now - Rs: 350
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkrUvYGORx6M0wSdjr33RuRZ3KeXNy9hVTA&s" alt="Food 7" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Takha</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(400)}
            >
              Order Now - Rs: 400
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP0zandWWbXPV115yOzpVnGrr-cjVWeAhYWQ&s" alt="Food 8" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Nhyapu Tisyu(Buff Brains)</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(450)}
            >
              Order Now - Rs: 450
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoy2w8SoGUVpHtuoKHi9aHbm_1-zIG4VP3HQ&s" alt="Food 9" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Aila(Local Rakshi)</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(500)}
            >
              Order Now - Rs: 500
            </button>
          </div>
          <div className="flex flex-col items-center m-4">
            <img src="https://i.pinimg.com/474x/fe/5e/a0/fe5ea0de78d12ec31c1911cbc8b456c7.jpg" alt="Food 10" className="w-36 h-36 object-cover mb-4" />
            <h1 className="text-white">Thow(Local Xyang)</h1>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={() => handleOrderNow(550)}
            >
              Order Now - Rs: 550
            </button>
          </div>
        </div>
        <div className="mt-8 flex justify-between w-full max-w-4xl">
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 cursor-pointer"
            onClick={handleClearAll}
          >
            Clear All Orders
          </button>
          <h2 className="text-2xl font-bold text-white">Total Amount: Rs: {totalAmount}</h2>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 cursor-pointer"
            onClick={handleOrderAll}
          >
            Order It
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderNow;