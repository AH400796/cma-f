// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'components/SharedLayout';

const ArbCont = lazy(() => import('../../pages/ArbCont'));
// const Products = lazy(() => import('../../pages/Products'));
// const Contacts = lazy(() => import('../../pages/Contacts'));

export default function App() {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ArbCont />} />
        {/* <Route
          path="products"
          element={<Products screenWidth={screenWidth} />}
        />
        <Route
          path="contacts"
          element={<Contacts screenWidth={screenWidth} />}
        /> */}
        {/* <Route path="*" element={<ArbCont />} /> */}
      </Route>
    </Routes>
  );
}
