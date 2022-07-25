import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import Detail from './pages/detailPage';
import SearchPage from './pages/searchPage';
import FavPage from './pages/favoritePage';


export default function App(){
  return(
    <Routes>
      <Route exact path='/' element={<HomePage></HomePage>}/>
      <Route exact path='/detail/:animeid' element={<Detail></Detail>}/>
      <Route exact path='/search' element={<SearchPage></SearchPage>}/>
      <Route exact path='/favorite' element={<FavPage></FavPage>}/>
    </Routes>
  );
}
