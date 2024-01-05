import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFoods = () => {
  const updateData = useLoaderData();
  const { name, img, brandName, price, type, rating, description } = updateData;
  console.log(updateData.img);

  const { id } = useParams();
  console.log(id);
  const handleUpdateFoods = (ev) => {
    ev.preventDefault();
    const form = ev.target;

    const name = form.productName.value;
    const image = form.photoUrl.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const Card = { name, image, brandName, price, type, rating, description };
console.log(Card);
    fetch(`http://localhost:5000/updateFoods/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Card),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
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
            Updated Foods
          </h2>
          <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
            <form onSubmit={handleUpdateFoods}>
              <div className="flex justify-center items-center gap-4 ">
                <div className="flex-1">
                  <div className="mb-5">
                    <label className="block mb-2 font-bold text-gray-600">
                      Foods Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      defaultValue={name}
                      placeholder="Enter Your Product Name"
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
                      defaultValue={img}
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
                      defaultValue={brandName}
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
                      defaultValue={price}
                      placeholder="Enter Your Product Price"
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
                      defaultValue={type}
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
                      defaultValue={rating}
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
                  defaultValue={description}
                  placeholder="Enter Short Description   "
                  className="border border-gray-300 resize-none shadow p-3 w-full rounded mb-"
                />
              </div>

              <button
                type="submit"
                className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg"
              >
                Updated Foods
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateFoods;
