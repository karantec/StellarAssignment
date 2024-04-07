import React from "react";
import {
  BarChart,
  Layers,
  Settings,
  LogOut ,
  Home,
  Timer,
  Rocket,
 
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="flex h-full text-white bg-[#2F667F] w-64 flex-col overflow-y-auto border-r mt-5  px-5 py-8 rounded-lg ">
        <div className="ml-[10rem]">

      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          d="M22.389 15.2222L17.8709 19.4176C17.1608 20.077 17.1608 21.2009 17.8709 21.8602L22.389 26.0556M20.2223 3.88892C11.0176 3.88892 3.55566 11.3508 3.55566 20.5556C3.55566 29.7603 11.0176 37.2222 20.2223 37.2222C29.4271 37.2222 36.889 29.7603 36.889 20.5556C36.889 11.3508 29.4271 3.88892 20.2223 3.88892Z"
          stroke="#FEFEFE"
          stroke-width="2.5"
          stroke-linecap="round"
          />
      </svg>
          </div>

      <a href="#" className="flex mt-[2rem] flex-row items-center justify-center gap-[1.4rem]">
        <svg
          width="43"
          height="44"
          viewBox="0 0 43 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.88916 11.4074V30.963C3.88916 31.6807 4.32069 32.328 4.98318 32.604L21.6669 39.5556M3.88916 11.4074L20.2994 4.5698C21.1746 4.20513 22.1592 4.20513 23.0345 4.5698L30.5558 7.7037M3.88916 11.4074L12.778 15.1111M21.6669 18.8148V39.5556M21.6669 18.8148L39.4447 11.4074M21.6669 18.8148L12.778 15.1111M21.6669 39.5556L38.3507 32.604C39.0132 32.328 39.4447 31.6807 39.4447 30.963V11.4074M39.4447 11.4074L30.5558 7.7037M12.778 15.1111L30.5558 7.7037"
            stroke="#FEFEFE"
            stroke-width="2.66667"
            stroke-linejoin="round"
          />
        </svg>
        <h1 className="text-xl font-bold text-white ">Catalix</h1>
      </a>
      <div className="mt-6 flex flex-1 flex-col  justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-10 ">
            
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-[#539BBB] hover:text-gray-700"
              href="#"
            >
              <Home className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="mx-2 text-sm text-white font-medium">Home</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-[#539BBB] hover:text-gray-700"
              href="#"
            >
              <Timer className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="mx-2 text-sm text-white font-medium">Activites</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-[#539BBB] hover:text-gray-700"
              href="#"
            >
              <BarChart className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="mx-2 text-sm text-white font-medium">Analytics</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-[#539BBB] hover:text-gray-700"
              href="#"
            >
              <Rocket className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="mx-2 text-sm text-white font-medium">Transformation</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-[#539BBB] hover:text-gray-700"
              href="#"
            >
              <Layers className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="mx-2 text-sm text-white font-medium ">Library</span>
            </a>
          </div>
         
         <hr/>

          <div className="space-y-3 ">
           
            
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-[#539BBB] hover:text-gray-700"
              href="#"
            >
              <Settings className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium text-white">Setting</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-[#539BBB] hover:text-gray-700"
              href="#"
            >
              <LogOut  className="h-5 w-5 text-white" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium text-white">Log Out</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
