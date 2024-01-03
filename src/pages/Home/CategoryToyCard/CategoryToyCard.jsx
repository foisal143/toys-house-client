import React, { useEffect } from 'react';
import { FaEye, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import AOS from 'aos';
const CategoryToyCard = ({ toy }) => {
  const { name, image, rating, price, _id } = toy;

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
    });
  }, []);
  return (
    <div
      data-aos="fade-right"
      className="card h-80  w-full border pt-5 bg-base-100 shadow-xl"
    >
      <figure className="h-1/2 rounded-md">
        <img
          className="h-full rounded-xl w-1/2 mx-auto"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body  pb-0">
        <h2 className="card-title">{name}</h2>
        <div className="flex mt-3 justify-between items-center">
          <p>Price: ${price}</p>
          <p className="flex items-center gap-1">
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar className="text-yellow-500" />}
              placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
            ></Rating>{' '}
            {rating}
          </p>
          <Link to={`all-toys/${_id}`}>
            <button>
              <FaEye></FaEye>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryToyCard;
