import { Link } from 'react-router-dom';
import baner1 from '../../../assets/baner1.jpg';
import baner2 from '../../../assets/baner2.avif';
import baner3 from '../../../assets/baner3.jpg';
import baner4 from '../../../assets/baner4.jpg';

const HeroSection = () => {
  return (
    <div className="carousel my-5 h-[80vh]  w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={baner1} className="w-full h-full" />
        <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>

        <div className="bg-black/70 flex justify-center items-center text-white  w-full h-full absolute top-0">
          <div className="lg:w-1/2 mx-auto text-center space-y-5">
            <h3 className="md:text-5xl text-3xl font-bold">
              Wellcome To Toys House
            </h3>
            <p className="text-gray-300">
              At <strong>Toys House</strong>, we believe in creating a world of
              wonder and joy for children through our enchanting collection of
              toy houses. Our online platform is a haven for parents and
              caregivers seeking the perfect miniature abode for their little
              ones. Explore a magical realm where creativity knows no bounds and
              endless adventures await.
            </p>
            <Link to="/blog">
              {' '}
              <button className="btn-coustom mt-5">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={baner2} className="w-full" />
        <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="bg-black/70 flex justify-center items-center text-white  w-full h-full absolute top-0">
          <div className="lg:w-1/2 mx-auto text-center space-y-5">
            <h3 className="md:text-5xl text-3xl font-bold">
              Wellcome To Toys House
            </h3>
            <p className="text-gray-300">
              At <strong>Toys House</strong>, we believe in creating a world of
              wonder and joy for children through our enchanting collection of
              toy houses. Our online platform is a haven for parents and
              caregivers seeking the perfect miniature abode for their little
              ones. Explore a magical realm where creativity knows no bounds and
              endless adventures await.
            </p>
            <Link to="/blog">
              {' '}
              <button className="btn-coustom mt-5">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={baner3} className="w-full" />
        <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="bg-black/70 flex justify-center items-center text-white  w-full h-full absolute top-0">
          <div className="lg:w-1/2 mx-auto text-center space-y-5">
            <h3 className="md:text-5xl text-3xl font-bold">
              Wellcome To Toys House
            </h3>
            <p className="text-gray-300">
              At <strong>Toys House</strong>, we believe in creating a world of
              wonder and joy for children through our enchanting collection of
              toy houses. Our online platform is a haven for parents and
              caregivers seeking the perfect miniature abode for their little
              ones. Explore a magical realm where creativity knows no bounds and
              endless adventures await.
            </p>
            <Link to="/blog">
              {' '}
              <button className="btn-coustom mt-5">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={baner4} className="w-full" />
        <div className="absolute z-10 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="bg-black/70 flex justify-center items-center text-white  w-full h-full absolute top-0">
          <div className="lg:w-1/2 mx-auto text-center space-y-5">
            <h3 className="md:text-5xl text-3xl font-bold">
              Wellcome To Toys House
            </h3>
            <p className="text-gray-300">
              At <strong>Toys House</strong>, we believe in creating a world of
              wonder and joy for children through our enchanting collection of
              toy houses. Our online platform is a haven for parents and
              caregivers seeking the perfect miniature abode for their little
              ones. Explore a magical realm where creativity knows no bounds and
              endless adventures await.
            </p>
            <Link to="/blog">
              {' '}
              <button className="btn-coustom mt-5">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
