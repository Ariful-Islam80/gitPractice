import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { Link } from "react-router-dom";

import MyAddFoods from "../MyAddFoods/MyAddFoods";
import MyOrderFoods from "../MyOrderFoods/MyOrderFoods";
//

const Profile = () => {
  const [activeTab, setActiveTab] = useState("app");
  const { user } = useContext(AuthContext);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
  return (
    <>
      <section className="flex items-center   font-poppins dark:bg-gray-700 ">
        <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-full lg:py-4 md:px-6">
          <div className=" mx-auto mb-4 rounded-lg shadow-md p-5">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={user?.photoURL}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-semibold mt-3">
              {user?.displayName}
            </h2>
          </div>

          <div className="w-full">
            <div className="relative right-0">
              <ul
                className="relative flex flex-wrap p-1 list-none rounded-xl bg-blue-gray-50/60"
                data-tabs="tabs"
                role="list"
              >
                <li className="z-30 flex-auto text-center">
                  <Link
                    className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-lime-500 bg-inherit ${
                      activeTab === "app" ? "bg-blue-600 text-white" : ""
                    }`}
                    data-tab-target=""
                    onClick={() => handleTabClick("app")}
                    role="tab"
                    aria-selected={activeTab === "app" ? "true" : "false"}
                    aria-controls="app"
                  >
                    <span className="ml-1 text-lg md:text-4xl btn btn-info text-white px-3">
                      My Add Foods
                    </span>
                  </Link>
                </li>
                <li className="z-30 flex-auto text-center">
                  <Link 
                    className={`z-30 flex items-center justify-center w-full px-0 py-1 mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer text-lime-400 bg-inherit  ${
                      activeTab === "message" ? "bg-blue-600 text-white" : ""
                    }`}
                    data-tab-target=""
                    onClick={() => handleTabClick("message")}
                    role="tab"
                    aria-selected={activeTab === "message" ? "true" : "false"}
                    aria-controls="message"
                  >
                    <span className="ml-1 text-lg md:text-4xl btn btn-info text-white px-3">
                      My Order Foods
                    </span>
                  </Link>
                </li>
              </ul>
              <div data-tab-content="" className="p-5">
                <div
                  className={`block ${
                    activeTab === "app" ? "opacity-100" : "hidden opacity-0"
                  }`}
                  id="app"
                  role="tabpanel"
                >
                  <MyAddFoods></MyAddFoods>
                </div>
                <div
                  className={`block ${
                    activeTab === "message" ? "opacity-100" : "hidden opacity-0"
                  }`}
                  id="message"
                  role="tabpanel"
                >
                  <MyOrderFoods></MyOrderFoods>
                </div>
                <div
                  className={`block ${
                    activeTab === "settings"
                      ? "opacity-100"
                      : "hidden opacity-0"
                  }`}
                  id="settings"
                  role="tabpanel"
                >
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                    Comparing yourself to others is the thief of joy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
