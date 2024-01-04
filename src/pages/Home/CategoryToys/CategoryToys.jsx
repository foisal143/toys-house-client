import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryToyCard from '../CategoryToyCard/CategoryToyCard';
import AOS from 'aos';
import { AuthContext } from '../../../Authprovaider/Authprovaider';
const CategoryToys = () => {
  const { logout } = useContext(AuthContext);
  const [category, setCategory] = useState('regular');
  const [toys, setToys] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/toys?category=${category}`)
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setToys(data);
          setLoader(false);
        }
      });
  }, [category]);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
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

        {loader ? (
          <div className="text-center mt-12">
            <progress className="progress  w-56"></progress>
          </div>
        ) : (
          <>
            <TabPanel>
              <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {toys ? (
                  toys.map(toy => (
                    <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>
                  ))
                ) : (
                  <p className="font-semibold text-center">No Toys here</p>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {toys ? (
                  toys.map(toy => (
                    <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>
                  ))
                ) : (
                  <p className="font-semibold text-center">No Toys here</p>
                )}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {toys ? (
                  toys.map(toy => (
                    <CategoryToyCard key={toy._id} toy={toy}></CategoryToyCard>
                  ))
                ) : (
                  <p className="font-semibold text-center">No Toys here</p>
                )}
              </div>
            </TabPanel>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default CategoryToys;
