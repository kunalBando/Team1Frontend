
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeatureHome from "./ManageUser/FeatureHome";

import SearchUser from './ManageUser/SearchUser';
import NewFeature from './ManageUser/NewFeature';
import MyFavorites from './ManageUser/MyFavorites';
// import Navbar from './Navbar';
import MyFeature from './ManageUser/MyFeature';
import SearchResult from './ManageUser/SearchResult';
import ViewEntity from './ManageUser/ViewEntity';
//import Header from './ManageUser/Header';
import LandingPage from './ManageUser/Pages/LandingPage';
import CsvUploader from './ManageUser/CsvUploader';


function App() {
  return (

    <>
    
    <BrowserRouter>
    
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/featurehome" element={<FeatureHome></FeatureHome>} />
          <Route path="/searchuser" element={<SearchUser></SearchUser>} />
          <Route path="/searchresult" element={<SearchResult></SearchResult>} />
          <Route path="/newfeature" element={<NewFeature></NewFeature>} />
          <Route path="/myfeature" element={<MyFeature></MyFeature>} />
          <Route path="/viewentity/:id" element={<ViewEntity></ViewEntity>} />
          <Route path='/MyFavorites' element={<MyFavorites></MyFavorites>} />
          <Route path='/csvupload' element={<CsvUploader/>} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
