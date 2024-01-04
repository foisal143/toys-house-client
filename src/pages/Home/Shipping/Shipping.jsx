import AOS from 'aos';
import { useEffect } from 'react';
import { FaClock, FaMoneyBill, FaShippingFast, FaTimes } from 'react-icons/fa';

const Shipping = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
    });
  }, []);

  return (
    <div className="grid grid-cols-3 mt-20 gap-5">
      <div
        data-aos="fade-up"
        className="p-5 hover:border-2 hover:border-yellow-500 border-2 text-center space-y-5"
      >
        <p className="lg:text-4xl w-fit mx-auto">
          <FaShippingFast></FaShippingFast>
        </p>
        <h3 className="text-[3vw]  font-bold">Free Shipping</h3>
        <p className="text-[1.2vw]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          cumque? Obcaecati corrupti expedita, dolorum vel cupiditate dicta
          praesentium mollitia nulla.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="p-5 hover:border-2 hover:border-yellow-500 border-2 text-center space-y-5"
      >
        <p className="lg:text-4xl w-fit mx-auto">
          <FaClock></FaClock>
        </p>
        <h3 className="text-[3vw]  font-bold">24/7 Services</h3>
        <p className="text-[1.2vw]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          cumque? Obcaecati corrupti expedita, dolorum vel cupiditate dicta
          praesentium mollitia nulla.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="p-5 hover:border-2 hover:border-yellow-500 border-2 text-center space-y-5"
      >
        <p className="lg:text-4xl w-fit mx-auto">
          <FaMoneyBill></FaMoneyBill>
        </p>
        <h3 className="text-[3vw]  font-bold">Return Policy</h3>
        <p className="text-[1.2vw]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
          cumque? Obcaecati corrupti expedita, dolorum vel cupiditate dicta
          praesentium mollitia nulla.
        </p>
      </div>
    </div>
  );
};

export default Shipping;
