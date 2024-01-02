const AddToys = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // Add your logic for submitting toy data to the backend
  };
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Add Toy</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
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
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              id="name"
              name="name"
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
              name="sellerName"
              readOnly
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
              name="sellerEmail"
              readOnly
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label
              htmlFor="subCategory"
              className="block text-sm font-medium text-gray-600"
            >
              Sub-category:
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border rounded-md"
              id="subCategory"
              name="subCategory"
              required
            />
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
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-3 rounded-md hover:bg-indigo-600"
        >
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToys;
