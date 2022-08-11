import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <ProductList />
      <Contact />
      <Footer text="All rights reserved" />
    </div>
  );
}

export default App;
