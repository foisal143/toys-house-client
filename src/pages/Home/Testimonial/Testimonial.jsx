import { useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
    });
  }, []);
  return (
    <>
      <h2 className="text-center my-12 text-4xl font-bold">Testimonial</h2>
      <div
        data-aos="fade-up"
        className="px-5 space-y-5 my-12  md:flex justify-between items-center gap-10"
      >
        <div className="space-y-5 text-center">
          <img
            className="w-32 h-32 mx-auto rounded-full"
            src="https://www.shutterstock.com/image-photo/people-lifestyle-concept-headshot-attractive-260nw-577520995.jpg"
            alt=""
          />
          <h2 className="font-bold text-2xl">Khalid Farhan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            quaerat magni ea ullam voluptates cumque vel ipsum natus veniam ex.
          </p>
          <p className="flex items-center justify-center gap-2 text-yellow-500">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </p>
        </div>
        <div className="space-y-5 text-center">
          <img
            className="w-32 h-32 mx-auto rounded-full"
            src="https://www.shutterstock.com/image-photo/people-lifestyle-concept-headshot-attractive-260nw-577520995.jpg"
            alt=""
          />
          <h2 className="font-bold text-2xl">Khalid Farhan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            quaerat magni ea ullam voluptates cumque vel ipsum natus veniam ex.
          </p>
          <p className="flex items-center justify-center gap-2 text-yellow-500">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </p>
        </div>
        <div className="space-y-5 text-center">
          <img
            className="w-32 h-32 mx-auto rounded-full"
            src="https://www.shutterstock.com/image-photo/people-lifestyle-concept-headshot-attractive-260nw-577520995.jpg"
            alt=""
          />
          <h2 className="font-bold text-2xl">Khalid Farhan</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            quaerat magni ea ullam voluptates cumque vel ipsum natus veniam ex.
          </p>
          <p className="flex items-center justify-center gap-2 text-yellow-500">
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
