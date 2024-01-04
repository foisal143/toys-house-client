import { useContext } from 'react';
import { AuthContext } from '../../Authprovaider/Authprovaider';
import toast from 'react-hot-toast';
import UseTitle from '../../Title/Title';

const AddToys = () => {
  const { user } = useContext(AuthContext);
  UseTitle('| Add Toys');
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.pictureUrl.value;
    const seller = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;
    const toysInfo = {
      name,
      image,
      seller,
      sellerEmail,
      subCategory,
      quantity,
      rating,
      price,
      description,
    };

    fetch('http://localhost:5000/toys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(toysInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast.success('Toy Added Success');
          form.reset();
        }
      });
  };
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Add Toy</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl border p-3 rounded-md mx-auto"
      >
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="pictureUrl"
              className="block text-sm font-medium text-gray-600"
            >
              Picture URL of the toy:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              id="pictureUrl"
              name="pictureUrl"
              placeholder="url"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Toy Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              id="name"
              name="name"
              placeholder="name"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="sellerName"
              className="block text-sm font-medium text-gray-600"
            >
              Seller Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
              id="sellerName"
              defaultValue={user?.displayName}
              name="sellerName"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="sellerEmail"
              className="block text-sm font-medium text-gray-600"
            >
              Seller Email:
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border rounded-md bg-gray-100"
              id="sellerEmail"
              value={user?.email}
              name="sellerEmail"
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mb-4">
          <div className=" w-full px-4 md:w-1/2 mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-600"
            >
              Sub-category:
            </label>
            <select
              id="category"
              className="p-2 border w-full rounded-md"
              name="subCategory"
            >
              <option value="">All Categories</option>
              <option value="regular">Regular Car</option>
              <option value="sports car">Sports Car</option>
              <option value="truck">Truck</option>
              {/* Add more category options as needed */}
            </select>
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Price:
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"
              id="price"
              name="price"
              placeholder="price"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-600"
            >
              Rating:
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"
              id="rating"
              name="rating"
              placeholder="rating"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-600"
            >
              Available quantity:
            </label>
            <input
              type="number"
              className="mt-1 p-2 w-full border rounded-md"
              id="quantity"
              name="quantity"
              placeholder="quantity"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Detail description:
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md"
            id="description"
            name="description"
            placeholder="description"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-500  p-3 rounded-md hover:bg-yellow-600"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToys;
