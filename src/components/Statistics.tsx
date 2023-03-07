import React from 'react'

import {BsCalendar2Week} from "react-icons/bs"
import {FaUsers} from "react-icons/fa"
import {MdPendingActions} from "react-icons/md"
import {AiOutlineFileDone} from "react-icons/ai"

export default function Statistics() {
  return (
    <div>
      <h3 className="text-base font-semibold leading-6 text-gray-900">
        Last 7 days
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-purple-700 p-3">
              <BsCalendar2Week size={28} className="text-white" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Total Bookings
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">71,897</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <svg
                className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only"> Increased by </span>
              122
            </p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-purple-700 hover:text-indigo-500"
                >
                  {" "}
                  View all
                  <span className="sr-only"> Total Subscribers stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-purple-700 p-3">
              <AiOutlineFileDone size={28} className="text-white" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Avg. Completed booking
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">58.16%</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <svg
                className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only"> Increased by </span>
              5.4%
            </p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-purple-700 hover:text-indigo-500"
                >
                  {" "}
                  View all<span className="sr-only"> Avg. Open Rate stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-purple-700 p-3">
              <MdPendingActions size={28} className="text-white" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
             Avg. pending bookings
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">24.57%</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
              <svg
                className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only"> Decreased by </span>
              3.2%
            </p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-purple-700 hover:text-indigo-500"
                >
                  {" "}
                  View all
                  <span className="sr-only"> Avg. Click Rate stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>

        <div className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
          <dt>
            <div className="absolute rounded-md bg-purple-700 p-3">
              <FaUsers size={28} className="text-white" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              Users
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-gray-900">24.57%</p>
            <p className="ml-2 flex items-baseline text-sm font-semibold text-red-600">
              <svg
                className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only"> Decreased by </span>
              3.2%
            </p>
            <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-purple-700 hover:text-indigo-500"
                >
                  {" "}
                  View all
                  <span className="sr-only"> Avg. Click Rate stats</span>
                </a>
              </div>
            </div>
          </dd>
        </div>
      </dl>
    </div>
  );
}
