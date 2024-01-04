import Lottie from 'lottie-react';
import lotifile from '../assets/lottie/404.json';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="my-12 mx-auto px-5 lg:w-1/2">
      <Lottie
        className="w-full h-full"
        animationData={lotifile}
        loop={true}
      ></Lottie>

      <Link className="flex w-fit mx-auto items-center gap-2" to="/">
        <FaArrowLeft /> Go To Home
      </Link>
    </div>
  );
};

export default ErrorPage;
