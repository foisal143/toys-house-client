import { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../Authprovaider/Authprovaider';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [control, setControl] = useState(true);
  const [updateId, setUpdateId] = useState('');
  const handlerDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
              const remaing = toys.filter(toy => toy._id !== id);
              setToys(remaing);
              setControl(!control);
            }
          });
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;
    const toysInfo = {
      name,
      quantity,
      price,
      description,
    };
    console.log(updateId);
    fetch(`http://localhost:5000/toys/${updateId}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(toysInfo),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Update Success',
            text: 'you are successfuly update the toy information',
            icon: 'success',
          });
          form.reset();
          setControl(!control);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/toys?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setToys(data));
  }, [user, control]);

  return (
    <div className="mt-12">
      <h3 className="text-4xl font-bold text-center">My Toys Here</h3>

      <div className="overflow-x-auto mt-10">
        <table className="table table-xs">
          <thead>
            <tr>
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
              toys.map(toy => (
                <tr key={toy._id}>
                  <td>{toy.seller}</td>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td>${toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => {
                        document.getElementById('my_modal_5').showModal();
                        setUpdateId(toy._id);
                      }}
                      className="bg-slate-100 p-2 rounded-full"
                    >
                      <FaEdit></FaEdit>
                    </button>
                    <button
                      onClick={() => handlerDelete(toy._id)}
                      className="bg-red-100 text-red-500 p-2 rounded-full"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <dialog
        id="my_modal_5"
        className="modal -z-50 modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Your Toys Data</h3>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="w-full npm  px-4 mb-4">
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
                placeholder="toy name"
                required
              />
            </div>

            <div className="w-full  px-4 mb-4">
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
                placeholder="toy price"
                required
              />
            </div>

            <div className="w-full  px-4 mb-4">
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
                placeholder="toy quantity"
                name="quantity"
                required
              />
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
              Update Toy
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyToys;
