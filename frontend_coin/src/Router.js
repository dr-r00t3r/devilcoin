import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
// import RegisterScene from './scenes/RegisterScene';
// import LoginScene from './scenes/LoginScene';
import HomeScene from './scenes/HomeScene';
// import BlogScene from './scenes/BlogScene';
// import SingleProductScene from './scenes/SingleProductScene';
// import ProductsScene from './scenes/ProductsScene';
// import AboutUsScene from './scenes/AboutUsScene';
// import ContactUsScene from './scenes/ContactUsScene';

// import Status404Scene from './scenes/Status404Scene';

// import AdvertisingScene from './scenes/AdvertisingScene';
// import Status404Scene from './scenes/Status404Scene';
// import SmartRealEstateValuationsScene from './scenes/SmartRealEstateValuationsScene';
// import HousePriceScene from './scenes/HousePriceScene';
// import AgenciesScene from './scenes/AgenciesScene';
// import AgenciesSingleScene from './scenes/AgenciesSingleScene'; 

const RouterComponent = () => {
  return (
    <Router >
      <Routes>
        <Route exact path='/' element={< HomeScene/>}/>
        {/* <Route exact path='/register' element={< RegisterScene/>}/>
        <Route exact path='/login' element={< LoginScene/>}/>
        <Route exact path='/blog'   element={< BlogScene/>}  />
        <Route exact path='/blog/:id'   element={< BlogScene/>}  />
        <Route exact path='/product/:id' element={< SingleProductScene />}/>
        <Route exact path='/products'   element={< ProductsScene/>}  /> */}
        {/* <Route exact path='/search' element={< SearchScene/>}/> */}
        {/* <Route exact path='/search/' element={< SearchScene/>}/> */}
        {/*<Route path='/projects/:id'   component={ProjectsScene} exact />*/}
        {/* <Route exact path='/about-us'   element={<AboutUsScene/>}/>
        <Route exact path='/contact-us'   element={<ContactUsScene/>}/> */}
        {/*<Route path='/team'   component={TeamScene} exact />*/}

        {/* <Route path="/404" element={<Status404Scene />} />
        <Route path="*" element={<Navigate to="/404" />} /> */}
        {/* <Route path="*" Component={Status404Scene} /> */}
      </Routes>
    </Router>
  );
};

export default RouterComponent;