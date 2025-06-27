import React from "react";

const Promo = () => (
  <div className="w-full">
    <div className="bg-red-500 text-white text-center text-sm sm:text-base py-2 px-4">
      Please ensure all items in cart and shipping addresses are correct as we
      cannot edit any order information due to automated processing.
    </div>

    <div className="bg-gray-900 text-gray-200 text-center text-sm sm:text-base py-2 px-4">
      The Retailer Portal has been fixed. Please contact{" "}
      <a
        href="mailto:support@gamevault.com"
        className="underline hover:text-white"
      >
        support@gamevault.com
      </a>{" "}
      if you are still experiencing issues.
    </div>
  </div>
);

export default Promo;
