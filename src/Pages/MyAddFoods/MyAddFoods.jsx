import { useContext, useEffect, useState } from "react";
import FoodCard from "../../Shared/FoodCard";
import useFetch from "../Hooks/useFetch";
import Skeleton from "../../Shared/Skeleton";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAddFoods = () => {
  const user = useContext(AuthContext);
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/userAddFoods?email=${user?.user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFood(data);
      });
  }, [user?.user?.email]);

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-6 px-6 md:px-36 py-4 mx-auto">
        {food?.map((product) => (
          <FoodCard key={product?._id} product={product}></FoodCard>
        ))}
      </div>
    </>
  );
};

export default MyAddFoods;
