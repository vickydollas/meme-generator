import Header from "./component/Header";
import Footer from "./component/Footer";
import Form from "./component/Form";
import "./App.css"

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="App">
        <Form/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;