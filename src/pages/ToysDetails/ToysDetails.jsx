import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const ToysDetails = () => {
  const toy = useLoaderData();
  const {
    name,
    image,
    seller,
    sellerEmail,
    subCategory,
    quantity,
    rating,
    price,
    description,
  } = toy;
  return (
    <div className="card md:w-1/2 border mx-auto my-12 bg-base-100 shadow-xl">
      <figure className="h-80 p-5">
        <img className="w-full h-full" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <strong className="text-xl">Seller:</strong> {seller}
        </p>
        <p>
          <strong className="text-xl">Seller Email:</strong> {sellerEmail}
        </p>
        <p>
          <strong className="text-xl">Category:</strong> {subCategory}
        </p>
        <p className="flex justify-between items-center ">
          <span>Price: {price}</span>
          <span>
            {' '}
            <Rating
              placeholderRating={rating}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar className="text-yellow-500" />}
              placeholderSymbol={<FaStar className="text-yellow-500"></FaStar>}
            ></Rating>{' '}
            {rating}
          </span>
          <span>Quantity: {quantity}</span>
        </p>
        <p>
          <strong className="text-xl">Description:</strong> {description}
        </p>
        <div className="card-actions justify-end">
          <Link to="/">
            {' '}
            <button className="btn btn-warning">Go To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
