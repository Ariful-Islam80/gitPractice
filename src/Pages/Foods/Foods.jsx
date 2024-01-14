import { useEffect, useState } from "react";
import FoodCard from "../../Shared/FoodCard";
import SearchBar from "../../Shared/SearchBar";
import Skeleton from "../../Shared/Skeleton";
import useFetch from "../Hooks/useFetch";
import { useLoaderData } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Foods = () => {
  const { count } = useLoaderData();
  const [food, setFood] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const numberOfPages = Math.ceil(count / itemsPerPage);

  useEffect(() => {
    fetch(
      `https://restaurant-eight-drab.vercel.app/foods?search=${search}&page=${currentPage}&skip=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [currentPage, itemsPerPage, search]);

  // one type pagination >>>>>>

  // const pages = [...Array(numberOfPages).keys()];

  //     second type pagination >>>>>>>
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  const handleItemsPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 8) {
      setCurrentPage(currentPage + 1);
    }
  };

  const { loading, error } = useFetch();
  if (loading) {
    return <Skeleton></Skeleton>;
  }
  if (error) {
    return (
      <h1 className="text-2xl lg:text-6xl text-center text-red-700">
        Empty Data
      </h1>
    );
  }


  return (
    <>
      <div className="w-4/12 mt-6 px-6 md:px-36">
        <SearchBar setSearch={setSearch}></SearchBar>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-36 py-4 mx-auto">
        {food?.map((product) => (
          <FoodCard key={product?._id} product={product}></FoodCard>
        ))}
      </div>

      {food.length > 0 ? (
        <div className="flex justify-center">
          <button
            onClick={handlePreviousPage}
            className="flex items-center btn hover:text-white hover:bg-gray-700 mr-1"
          >
            <IoIosArrowBack />
            <p>Previous</p>
          </button>

          {pages.map((page) => (
            <button
              className="lg:btn md:btn hover:text-white hover:bg-gray-700 mr-2"
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page + 1}
            </button>
          ))}
          <select
            onChange={handleItemsPerPage}
            className=" hover:text-white hover:bg-gray-700 mr-2"
            name=""
            value={itemsPerPage}
            id=""
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <button
            onClick={handleNextPage}
            className="flex items-center btn hover:text-white hover:bg-gray-700 mr-1"
          >
            <p>Next</p>
            <IoIosArrowForward />
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col sad-page">
          {/* Displaying the sad image */}
          <img src="../../../public/sorry (1).png" alt="No Data Founded" />
        </div>
      )}
    </>
  );
};

export default Foods;
