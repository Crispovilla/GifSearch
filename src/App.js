import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import Home from './components/Home'
import GiftExpertApp from './GifExpertApp';
import { NavbarMenu } from './layout/navbar';

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <NavbarMenu /> }>
               <Route index element={ <Home /> }/>
               <Route path='GifExpertApp' element={ <GiftExpertApp /> }/>               
               <Route path='*' element={ <Navigate replace to="/" /> }/>
  
               
            </Route>
          </Routes>
        </BrowserRouter>
  
      </div>
    );
  }

export default App