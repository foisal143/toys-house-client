import { useEffect } from 'react';
import image from '../../../assets/children-removebg.png';
import AOS from 'aos';
import { Link } from 'react-router-dom';
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
    });
  }, []);
  return (
    <div
      data-aos="fade-down"
      className="lg:flex px-5 lg:px-0 space-y-5 gap-10 my-20 justify-between items-center"
    >
      <div
        data-aos="fade-up"
        className="lg:w-[450px] flex justify-center h-[330px] items-center  md:h-[600px] lg:h-[450px] bg-yellow-500  rounded-full "
      >
        <img className="w-full " src={image} alt="" />
      </div>
      <div data-aos="fade-up" className="lg:w-1/2 space-y-5">
        <h4 className="text-base text-warning">About Us</h4>
        <h2 className="text-4xl font-bold">Our Toy Wonderland</h2>
        <p>
          Welcome to <strong>Our Toy Wonderland</strong> where imagination knows
          no bounds, and every corner is filled with the joy of play. At [Your
          Website Name], we believe in the magic of childhood, and our mission
          is to curate a world of toys that inspire creativity, learning, and
          endless smiles.
        </p>
        <Link to="/blog">
          <button className="btn-coustom mt-5">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
