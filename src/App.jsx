import React from "react";


import data from "./assets/data";
console.log(data);

export default function App() {
  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh] justify-center items-center">
      <div class="bg-white overflow-hidden shadow rounded-lg border">
        <div class="px-10 py-5 sm:px-6 flex flex-col justify-center items-center drop-shadow-lg">
          <img src={data.results[0].picture.large}  className="rounded-full object-center drop-shadow-lg w-20 h-20" alt="" />
          <p class="mt-1 max-w-2xl text-lg text-gray-500">
            This is some information about the user.
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Full name</dt>
              <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.results[0].name.title} {data.results[0].name.first} {data.results[0].name.last}
              </div>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Gender</dt>
              <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.results[0].gender} 
              </div>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Age</dt>
              <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {data.results[0].dob.age} 
              </div>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Email address</dt>
              <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.results[0].email}
              </div>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Phone number</dt>
              <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.results[0].phone}
              </div>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Address</dt>
              <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.results[0].location.street.number} {data.results[0].location.street.name} {data.results[0].location.city} {data.results[0].location.state} {data.results[0].location.postcode}
              </div>
            </div>
            <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt class="text-sm font-medium text-gray-500">Country</dt>
              <div class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {data.results[0].location.country}
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
