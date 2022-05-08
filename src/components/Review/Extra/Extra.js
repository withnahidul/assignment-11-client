import React from "react";

const Extra = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Upcomming books</h2>
      <div class="flex justify-center">
        <ul class="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
          <li class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg">
            Heroku-pdf
          </li>
          <li class="px-6 py-2 border-b border-gray-200 w-full">React-pdf</li>
          <li class="px-6 py-2 border-b border-gray-200 w-full">Js-pdf</li>
          <li class="px-6 py-2 border-b border-gray-200 w-full">Php-pdf</li>
          <li class="px-6 py-2 w-full rounded-b-lg">And a fifth one</li>
        </ul>
      </div>
    </div>
  );
};

export default Extra;
