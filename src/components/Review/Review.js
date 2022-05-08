import React from "react";

const Review = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Purpose</h2>
      <div class="flex justify-center">
        <div class="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="rounded-t-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
              alt=""
            />
          </a>
          <div class="p-6">
            <h5 class="text-gray-900 text-xl font-medium mb-2">our goal</h5>
            <p class="text-gray-700 text-base mb-4">
              You are alayes wellcome to Nis books Warehouse,Here you can get
              your desire every books.We try to build reading culture.
            </p>
            <button
              type="button"
              class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Click Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
