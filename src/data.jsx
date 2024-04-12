import { FaRegMap } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { LuListChecks } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { BiSupport } from "react-icons/bi";

export const sideBarLinks = [
    {
        label: 'Map',
        path: '/',
        icon: <FaRegMap className="w-7 h-7" />

    },
    {
        label: 'Calendar',
        path: '/calender',
        icon: <LuCalendarDays className="w-7 h-7" />


    },
    {
        label: 'Todo List',
        path: '/todo-list',
        icon: <LuListChecks className="w-7 h-7" />


    },
    {
        label: 'Goals',
        path: '/goals',
        icon:  <GoGoal className="w-7 h-7" />


    },
    {
        label: 'Support',
        path: '/support',
        icon: <BiSupport className="w-7 h-7" />


    },

]