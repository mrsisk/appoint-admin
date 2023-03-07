import React from 'react'
import { IconType } from 'react-icons';
import {
  BsCalendar4Week,
  BsDashSquareDotted,
  BsPeople,
  BsTable,
} from "react-icons/bs";
import { NavLink } from 'react-router-dom';

type MenuItem = {
    title: string,
    path: string,
    icon: IconType
}

export default function SideNav() {
    const menu: MenuItem[] = [
      {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: BsDashSquareDotted,
      },
      {
        title: "Bookings",
        path: "/admin/bookings",
        icon: BsCalendar4Week,
      },
      {
        title: "Schedules",
        path: "/admin/schedules",
        icon: BsTable,
      },
      {
        title: "Users",
        path: "/admin/users",
        icon: BsPeople,
      },
    ];
  return (
    <nav className="mt-4 flex-1 space-y-1 bg-white px-2">
      {/* <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" --> */}
      {menu.map((item, index) => (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-100 text-gray-900 group flex items-center rounded-md px-2 py-2 text-sm font-medium"
              : "text-gray-500 hover:bg-gray-50 hover:text-gray-900 group flex items-center rounded-md px-2 py-2 text-sm font-medium"
          }
          replace={true}
        >
          {/* <!-- Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" --> */}
          <>
            {<item.icon  className="group-hover:text-gray-500 mr-3 h-6 w-6 flex-shrink-0"/>}
            {item.title}
          </>
        </NavLink>
      ))}
    </nav>
  );
}
