import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToyCard from '../CategoryToyCard/CategoryToyCard';
import AOS from 'aos';

const CategoryToys = () => {
  const [category, setCategory] = useState('regular');

  const [sportsToy, setSportsToy] = useState([]);
  const [truckToys, setTruckToys] = useState([]);
  const [regularToys, setRegularToys] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    if (category === 'regular') {
      fetch(`http://localhost:5000/toys?category=${category}`)
        .then(res => res.json())
        .then(data => {
          setRegularToys(data);
          setLoader(false);
        });
      return;
    }
    if (category === 'sports car') {
      fetch(`http://localhost:5000/toys?category=${category}`)
        .then(res => res.json())
        .then(data => {
          setSportsToy(data);
          setLoader(false);
        });
      return;
    }
    if (category === 'truck') {
      fetch(`http://localhost:5000/toys?category=${category}`)
        .then(res => res.json())
        .then(data => {
          setTruckToys(data);
          setLoader(false);
        });
      return;
    }
  }, [category]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 300,
    });
  }, []);

  return (
    <div data-aos="fade-down" className="my-12">
      <h3 className="text-4xl font-bold text-center mb-5">Toys Shop</h3>

      <Tabs>
        <TabList>
          <Tab onClick={() => setCategory('regular')}>Regular Car</Tab>
          <Tab onClick={() => setCategory('sports car')}>Sports Car</Tab>
          <Tab onClick={() => setCategory('truck')}>Truck</Tab>
        </TabList>

        <TabPanel>
          {loader ? (
            <div className="text-center mt-12">
              <progress className="progress  w-56"></progress>
            </div>
          ) : (
            <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {regularToys ? (
                regularToys.map(toy => (
                  <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>
                ))
              ) : (
                <p className="font-semibold text-center">No Toys here</p>
              )}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {loader ? (
            <div className="text-center mt-12">
              <progress className="progress  w-56"></progress>
            </div>
          ) : (
            <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {sportsToy ? (
                sportsToy.map(toy => (
                  <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>
                ))
              ) : (
                <p className="font-semibold text-center">No Toys here</p>
              )}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          {loader ? (
            <div className="text-center mt-12">
              <progress className="progress  w-56"></progress>
            </div>
          ) : (
            <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {truckToys ? (
                truckToys.map(toy => (
                  <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>
                ))
              ) : (
                <p className="font-semibold text-center">No Toys here</p>
              )}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryToys;
