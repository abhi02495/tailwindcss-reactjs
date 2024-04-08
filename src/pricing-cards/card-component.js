import React from "react";

const CardComponent = (cardName, storage, pricing) => {
  return (
    //Container
    <div className="flex items-center justify-center h-screen bg-cyan-950">
      {/* Flex Container */}
      <div className="h-auto max-w-sm border-purple-600 border-[1rem] rounded-xl">
        {/* h2 */}
        <div>
          <h2 className="m-8 text-white text-center font-serif">STANDARD</h2>

          {/* p */}
          <p className="mb-2 mt-2 mx-16 text-white text-center text-6xl font-serif">
            200GB
          </p>

          {/* h3 */}
          <h3 className="text-white text-center font-serif">$3.99/month</h3>

          {/* button purchase */}
          <div className="flex justify-center">
            <button className="mt-8 mb-8 px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 duration-100 font-serif">
              Purchase
            </button>
          </div>
        </div>

        <hr />
        <div className="mt-8 mb-4">
          {/* 3 h4 */}
          <p className="text-white font-serif text-center leading-8">200 Gb storage</p>
          <p className="text-white font-serif text-center leading-8">Option to add members </p>
          <p className="text-white font-serif text-center leading-8">Extra member benefits</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
