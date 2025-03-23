
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import {Home} from './Component/Home';
import { Header } from './Component/Header';
import { Footer } from './Component/Footer';
import { AboutUs } from './Component/AboutUs';
import {Product} from './Component/Product';
import {Infrastructure} from './Component/Infrastructure';

function App() {
  return (
   <>
   <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home />}/>
          <Route path="/AboutUs" element={<AboutUs/>} /> 
          <Route path="/Product" element={<Product/>} />
         <Route path="/Infrastructure" element={<Infrastructure/>} /> 
      </Routes>
      <Footer/>
      </Router>
      </>
  );
}

export default App;

