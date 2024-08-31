import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
  const data = [
    { id: 1, text: "Designation" },
    { id: 2, text: "Expretiond" },
    { id: 3, text: "Designation" },
    { id: 4, text: "Combind" },
    { id: 5, text: "Designation" },
  ];

  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Data search & filtering =============
  const filteredData = data.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  // outside click korle seacch item remove ========
  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="py-[20px] bg-[#221f1f]">
      <div className="w-container mx-auto">
        <div className="flex justify-between items-center relative">
          <div className="w-[520px]">
            <Link to="#">
              <h3 className=" text-3xl font-medium uppercase text-white">
                Radiant
              </h3>
            </Link>
          </div>
          <div className="w-[480px]">
            <div className="flex items-center gap-6 ">
              <div className="relative cursor-pointer" ref={searchRef}>
                <input
                  onChange={handleSearch}
                  type="text"
                  placeholder="search for anything"
                  className=" text-white bg-transparent border border-slate-600 outline-none px-4 py-2 font-normal"
                  value={search}
                />
                <div className="absolute top-[15px] right-[10px]">
                  <FiSearch className=" text-white" />
                </div>
                {search && (
                  <div className="w-[300px] absolute  bg-[#555454] z-[55]">
                    {filteredData.length > 0 ? (
                      filteredData.map((item) => (
                        <div key={item.id} className="group">
                          <div className="flex justify-between items-center cursor-pointer p-2 group-hover:bg-white">
                            <div className="flex flex-col gap-[2px] text-white group-hover:text-black">
                              <p className="text-[14px]">
                                Search Result #{item.id}
                              </p>
                              <p className="text-[12px]">{item.text}</p>
                            </div>
                            <FaArrowRight className="text-white group-hover:text-black" />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-2 text-white">Result not found</div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex items-start gap-3 text-white">
                <p>Radiant Global/Uk</p>
                <p>203 587 964</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
