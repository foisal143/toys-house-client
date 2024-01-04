import { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseTitle from '../../Title/Title';

const AllToys = () => {
  UseTitle('| All Toys');
  const [toys, setToys] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loader, setLoader] = useState(true);
  const [limit, setLimit] = useState(20);
  const handleSearch = e => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearchValue(searchText);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/toys?search=${searchValue}&&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setToys(data);
        setLoader(false);
      });
  }, [searchValue, limit]);

  if (loader) {
    return (
      <div className="text-center mt-12">
        <progress className="progress  w-56"></progress>
      </div>
    );
  }

  return (
    <div className="mt-12 ">
      <h2 className="text-2xl font-bold text-center mb-4">All Toys</h2>
      <form
        onSubmit={handleSearch}
        className="flex lg:w-1/2 mx-auto items-center"
      >
        <input
          type="text"
          name="search"
          placeholder="Search for toys..."
          className="p-2 border rounded-l-md w-3/4"
        />
        <button type="submit" className="bg-yellow-500  p-2 rounded-r-md">
          Search
        </button>
      </form>
      <div className="overflow-x-auto mt-10 pb-5">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys &&
              toys.map((toy, i) => (
                <tr key={toy._id}>
                  <td>{i + 1}.</td>
                  <td className="p-2">{toy.seller}</td>
                  <td className="p-2">{toy.name}</td>
                  <td className="p-2">{toy.subCategory}</td>
                  <td className="p-2">${toy.price}</td>
                  <td className="p-2">{toy.quantity}</td>
                  <td className="p-2">
                    <Link to={`/all-toys/${toy._id}`}>
                      <button>
                        <FaEye></FaEye>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {toys.length === 20 && (
          <div className="my-5 text-center">
            <button onClick={() => setLimit(null)} className="btn-coustom">
              Show More
            </button>
          </div>
        )}
        {toys.length > 20 && (
          <div className="my-5 text-center">
            <button onClick={() => setLimit(20)} className="btn-coustom">
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToys;
