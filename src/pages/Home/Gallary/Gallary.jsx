import { useEffect } from 'react';
import img1 from '../../../assets/toys/1.jpg';
import img2 from '../../../assets/toys/2.jpg';
import img3 from '../../../assets/toys/3.jpg';
import img4 from '../../../assets/toys/4.jpg';
import img5 from '../../../assets/toys/5.jpg';
import img6 from '../../../assets/toys/6.jpg';
import AOS from 'aos';
const Gallary = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
    });
  }, []);
  return (
    <div className="my-20">
      <div data-aos="fade-up">
        <h3 className="text-4xl font-bold text-center">Toys Gellary</h3>
        <p className="text-center">Our some toys here for children</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div data-aos="fade-up" className="bg-slate-200 p-8">
          <img
            className="w-full rounded-md h-full hover:-translate-y-5 duration-200"
            src={img1}
            alt=""
          />
        </div>
        <div data-aos="fade-up" className="bg-slate-200 p-8">
          <img
            className="w-full h-full hover:-translate-y-5 rounded-md duration-200"
            src={img2}
            alt=""
          />
        </div>
        <div data-aos="fade-up" className="bg-slate-200 p-8">
          <img
            className="w-full h-full hover:-translate-y-5 rounded-md duration-200"
            src={img3}
            alt=""
          />
        </div>
        <div data-aos="fade-up" className="bg-slate-200 p-8">
          <img
            className="w-full h-full hover:-translate-y-5 rounded-md duration-200"
            src={img4}
            alt=""
          />
        </div>
        <div data-aos="fade-up" className="bg-slate-200 p-8">
          <img
            className="w-full h-full hover:-translate-y-5 rounded-md duration-200"
            src={img5}
            alt=""
          />
        </div>
        <div data-aos="fade-up" className="bg-slate-200 p-8">
          <img
            className="w-full h-full hover:-translate-y-5 rounded-md duration-200"
            src={img6}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;
