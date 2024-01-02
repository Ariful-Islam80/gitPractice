import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddProduct = () => {
  const user = useContext(AuthContext);
  const userEmail = user?.user?.email;
  const handleAddFoods = (ev) => {
    ev.preventDefault();
    const form = ev.target;

    const name = form.productName.value;
    const img = form.photoUrl.value;
    const category = form.brandName.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const Card = {
      name,
      img,
      category,
      price,
      type,
      rating,
      description,
      userEmail,
    };

    fetch("https://bangla-restaurant-server-side.vercel.app/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Card Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <>
      <div className="bg-gray-300 min-h-screen px-2 py-4 flex items-center">
        <div className="w-full">
          <h2 className="text-center text-gray-700 font-bold text-2xl uppercase mb-4 mt-4">
            Add Your Foods
          </h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={handleAddFoods}>
              <div className="flex justify-center items-center gap-4 ">
                <div className="flex-1">
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Foods Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      placeholder="Enter Your Foods Name"
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Image Url
                    </label>
                    <input
                      type="text"
                      name="photoUrl"
                      placeholder="Enter Your Photo URL"
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Category Name
                    </label>

                    <select
                      name="brandName"
                      className="select select-bordered w-full text-gray-600"
                    >
                      <option disabled selected>
                        Select Category Name
                      </option>
                      <option>Biryani</option>
                      <option>Meat</option>
                      <option>Burger</option>
                      <option>Sandwich</option>
                      <option>Pasta</option>
                      <option>Drinks</option>
                    </select>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      placeholder="Enter Your Foods Price"
                      className="border border-gray-300 shadow p-3 w-full rounded mb-"
                    />
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      {" "}
                      Type
                    </label>
                    <select
                      name="type"
                      className="select select-bordered w-full "
                    >
                      <option disabled selected>
                        Select Type Your Foods
                      </option>
                      <option>Biryani</option>
                      <option>Meat</option>
                      <option>Burger</option>
                      <option>Sandwich</option>
                      <option>Pasta</option>
                      <option>Drinks</option>
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Rating
                    </label>
                    <select
                      name="rating"
                      className="select select-bordered w-full "
                    >
                      <option disabled selected>
                        1
                      </option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label className="block mb-2 font-bold text-gray-600">
                  Description
                </label>
                <textarea
                  type=""
                  name="description"
                  placeholder="Enter Short Description   "
                  className="border border-gray-300 resize-none shadow p-3 w-full rounded mb-"
                />
              </div>

              <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">
                Add Foods
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
