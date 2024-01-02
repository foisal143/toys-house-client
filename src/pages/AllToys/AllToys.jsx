import React from 'react';
import { FaEye } from 'react-icons/fa';

const AllToys = () => {
  return (
    <div className="mt-12">
      <h3 className="text-4xl font-bold text-center">All Toys Here</h3>

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
            <tr>
              <td>Md Foisal</td>
              <td>Japanis Monstar</td>
              <td>Truck</td>
              <td>$50</td>
              <td>100</td>
              <td>
                <button>
                  <FaEye></FaEye>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
