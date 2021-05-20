import Footer from "./components/Footer";
import Header from './components/Header';
import ProductContainer from './container/ProductContainer';
import Message from './components/Message';

import CartContainer from './container/CartContainer';
import MessageContainer from "./container/MessageContainer";

function App() {
  return (
    <div >
      
  {/* Header */}
  <Header/>
  <main id="mainContainer">
    <div className="container">
      {/* Products */}
      <ProductContainer/>
      {/* Message */}
      <MessageContainer />
      {/* Cart */}
      <CartContainer />
    </div>
  </main>
  {/* Footer */}
  <Footer />
</div>

   
  );
}

export default App;
