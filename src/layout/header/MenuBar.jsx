// import React from "react";                 11111111111111111111111111111111
// import { Link } from "react-router-dom";

// const MenuBar = () => {
//   const menuData = [
//     {
//       id: 0,
//       text: "home",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 1,
//       text: "raw slider",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 2,
//       text: "swiper",
//       url: "#",
//       dropdown: [
//         {
//           id: 0,
//           droptext: "swiper slider1",
//           url: "#",
//           supdrop: null,
//         },
//         {
//           id: 1,
//           droptext: "swiper slider3",
//           url: "#",
//           supdrop: [
//             {
//               id: 0,
//               subdroptext: "slider1",
//               url: "#",
//             },
//             {
//               id: 0,
//               subdroptext: "slider2",
//               url: "#",
//             },
//             {
//               id: 0,
//               subdroptext: "slider2",
//               url: "#",
//             },
//           ],
//         },
//         {
//           id: 1,
//           droptext: "swiper slider2",
//           url: "#",
//           supdrop: null,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "swiper slider",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 4,
//       text: "download all",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 4,
//       text: "range bar",
//       url: "#",
//       dropdown: [
//         {
//           id: 0,
//           droptext: "page 1",
//           url: "#",
//           dropdown: null,
//         },
//         {
//           id: 1,
//           droptext: "page 2",
//           url: "#",
//           dropdown: null,
//         },
//         {
//           id: 2,
//           droptext: "page 3",
//           url: "#",
//           dropdown: null,
//         },
//       ],
//     },
//   ];

//   return (
//     <nav className="py-[20px] bg-[#221f1f]">
//       <ul className="flex gap-x-10 justify-center items-center  ">
//         <li>
//           <Link to="#">Home</Link>
//         </li>
//         <li>
//           <Link to="#">About</Link>
//         </li>
//         <li className="group relative">
//   <Link
//     to="#"
//     className="relative text-white after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange]"
//   >
//     Menu
//   </Link>
//   <ul className="absolute z-10 bg-[#555555] min-w-[280px] max-w-[350px] py-[20px] px-[30px] transition-all duration-300 mt-[40px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:mt-[5px] ease-in-out flex flex-col gap-3">
//     <li>
//       <Link
//         to="#"
//         className="text-[#fff] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[orange] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[white]"
//       >
//         Standard Layout
//       </Link>
//     </li>
//     <li>
//       <Link
//         to="#"
//         className="text-[#fff] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[orange] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[white]"
//       >
//         Harbit Layout
//       </Link>
//     </li>
//     <li className="group relative">
//       <Link
//         to="#"
//         className="text-[#fff] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[orange] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[white]"
//       >
//         Nikli Layout
//       </Link>
//       <ul className="hidden group-hover:block absolute z-10 bg-[#fff] min-w-[280px] max-w-[350px] py-[20px] px-[30px] transition-all duration-300 mt-[40px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:mt-[5px] ease-in-out  right-[-310px] top-0">
//         <li>
//           <Link
//             to="#"
//             className="text-[#555555] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[red] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[red]"
//           >
//             Jakaria Item
//           </Link>
//         </li>
//       </ul>
//     </li>
//   </ul>
// </li>

//         <li>
//           <Link to="#">Blog</Link>
//         </li>
//         <li>
//           <Link to="#">Contarct</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default MenuBar;

import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const menuData = [
    {
      id: 0,
      text: "home",
      url: "#",
      dropdown: null,
    },
    {
      id: 1,
      text: "raw slider",
      url: "#",
      dropdown: null,
    },
    {
      id: 2,
      text: "swiper",
      url: "#",
      dropdown: [
        {
          id: 0,
          droptext: "swiper slider1",
          url: "#",
          supdrop: null,
        },
        {
          id: 1,
          droptext: "swiper slider3",
          url: "#",
          supdrop: [
            {
              id: 0,
              subdroptext: "slider1",
              url: "#",
            },
            {
              id: 1,
              subdroptext: "slider2",
              url: "#",
            },
            {
              id: 2,
              subdroptext: "slider3",
              url: "#",
            },
          ],
        },
        {
          id: 2,
          droptext: "swiper slider2",
          url: "#",
          supdrop: null,
        },
      ],
    },
    {
      id: 3,
      text: "swiper slider",
      url: "#",
      dropdown: null,
    },
    {
      id: 4,
      text: "download all",
      url: "#",
      dropdown: null,
    },
    {
      id: 5,
      text: "range bar",
      url: "#",
      dropdown: [
        {
          id: 0,
          droptext: "page 1",
          url: "#",
          dropdown: null,
        },
        {
          id: 1,
          droptext: "page 2",
          url: "#",
          dropdown: null,
        },
        {
          id: 2,
          droptext: "page 3",
          url: "#",
          dropdown: null,
        },
      ],
    },
  ];

  const renderSubMenu = (submenu) => {
    return submenu.map((item) => (
      <li key={item.id} className="relative group">
        <Link
          to={item.url}
          className="text-[#fff] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[orange] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[white]"
        >
          {item.droptext}
        </Link>
        {item.supdrop && (
          <ul className="hidden group-hover:block absolute z-10 bg-[#fff] min-w-[200px] py-[10px] px-[15px] transition-all duration-300 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:mt-[5px] ease-in-out right-[-230px] top-0">
            {item.supdrop.map((subitem) => (
              <li key={subitem.id}>
                <Link
                  to={subitem.url}
                  className="text-[#555555] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[red] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[red]"
                >
                  {subitem.subdroptext}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  const renderMenu = () => {
    return menuData.map((item) => (
      <li key={item.id} className={`relative ${item.dropdown ? "group" : ""}`}>
        <Link
          to={item.url}
          className="relative text-white after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange]"
        >
          {item.text}
        </Link>
        {item.dropdown && (
          <ul className="absolute z-10 bg-[#555555] min-w-[280px] max-w-[350px] py-[20px] px-[30px] transition-all duration-300 mt-[40px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:mt-[5px] ease-in-out flex flex-col gap-3">
            {renderSubMenu(item.dropdown)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <nav className="py-[20px] bg-[#221f1f]">
      <ul className="flex gap-x-10 justify-center items-center capitalize">
        {renderMenu()}
      </ul>
    </nav>
  );
};

export default MenuBar;

// import React from "react";   222222222222222
// import { Link } from "react-router-dom";

// const MenuBar = () => {
//   const menuData = [
//     {
//       id: 0,
//       text: "home",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 1,
//       text: "raw slider",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 2,
//       text: "swiper",
//       url: "#",
//       dropdown: [
//         {
//           id: 0,
//           droptext: "swiper slider1",
//           url: "#",
//           supdrop: null,
//         },
//         {
//           id: 1,
//           droptext: "swiper slider3",
//           url: "#",
//           supdrop: [
//             {
//               id: 0,
//               subdroptext: "slider1",
//               url: "#",
//             },
//             {
//               id: 1,
//               subdroptext: "slider2",
//               url: "#",
//             },
//             {
//               id: 2,
//               subdroptext: "slider3",
//               url: "#",
//             },
//           ],
//         },
//         {
//           id: 2,
//           droptext: "swiper slider2",
//           url: "#",
//           supdrop: null,
//         },
//       ],
//     },
//     {
//       id: 3,
//       text: "swiper slider",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 4,
//       text: "download all",
//       url: "#",
//       dropdown: null,
//     },
//     {
//       id: 5,
//       text: "range bar",
//       url: "#",
//       dropdown: [
//         {
//           id: 0,
//           droptext: "page 1",
//           url: "#",
//           dropdown: null,
//         },
//         {
//           id: 1,
//           droptext: "page 2",
//           url: "#",
//           dropdown: null,
//         },
//         {
//           id: 2,
//           droptext: "page 3",
//           url: "#",
//           dropdown: null,
//         },
//       ],
//     },
//   ];

//   const renderSubMenu = (submenu) => {
//     return submenu.map((item) => (
//       <li key={item.id} className="group relative">
//         <Link
//           to={item.url}
//           className="text-[#fff] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[orange] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[white]"
//         >
//           {item.droptext}
//         </Link>
//         {item.supdrop && (
//           <ul className="hidden group-hover:block absolute z-10 bg-[#fff] min-w-[280px] max-w-[350px] py-[20px] px-[30px] transition-all duration-300 mt-[40px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:mt-[5px] ease-in-out right-[-310px] top-0">
//             {item.supdrop.map((subitem) => (
//               <li key={subitem.id}>
//                 <Link
//                   to={subitem.url}
//                   className="text-[#555555] inline-block pt-[10px] text-[15px] hover:transition-all hover:duration-900 hover:text-[red] font-medium relative after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-[red]"
//                 >
//                   {subitem.subdroptext}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ));
//   };

//   const renderMenu = () => {
//     return menuData.map((item) => (
//       <li key={item.id} className={`group relative ${item.dropdown ? 'group' : ''}`}>
//         <Link
//           to={item.url}
//           className={`relative text-white after:absolute after:content-[''] after:w-0 after:h-[2px] after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:duration-300 after:bg-indigo-300 duration-300 hover:text-[orange]`}
//         >
//           {item.text}
//         </Link>
//         {item.dropdown && (
//           <ul className="absolute z-10 bg-[#555555] min-w-[280px] max-w-[350px] py-[20px] px-[30px] transition-all duration-300 mt-[40px] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:mt-[5px] ease-in-out flex flex-col gap-3">
//             {renderSubMenu(item.dropdown)}
//           </ul>
//         )}
//       </li>
//     ));
//   };

//   return (
//     <nav className="py-[20px] bg-[#221f1f]">
//       <ul className="flex gap-x-10 justify-center items-center">
//         {renderMenu()}
//       </ul>
//     </nav>
//   );
// };

// export default MenuBar;
