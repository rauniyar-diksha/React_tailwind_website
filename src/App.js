// import logo from './logo.svg';
// import './App.css';
// import Card from './Card';
// import addplusImage from '../src/grocery-image.png';
// import vegetables from '../src/vegetables.png';
// import carrot from '../src/carrot.jpg';
// import pumpkin from '../src/pumpkin.jpg';
// import green from '../src/green.jpg';

import Header from "./components/Header";

function App() {
  return (
    <>
    <div>
      {/* <h1 className="text-3xl font-bold text-red-600 pt-10 pb-10 text-center">
        Card Design
      </h1>
      <div className="App flex">
        <Card
          title="Example Card"
          description="This is a sample card component."
          imageUrl={addplusImage}
        />
        <Card
          title="Vegetables Card"
          description="This card shows vegetables."
          imageUrl={vegetables}
        />
        <Card
          title="Carrot Card"
          description="This card shows a carrot."
          imageUrl={carrot}
        />
        <Card
          title="Pumpkin Card"
          description="This card shows a pumpkin."
          imageUrl={pumpkin}
        />
        <Card
          title="Green Card"
          description="This card shows something green."
          imageUrl={green}
        />
        <Card
          title="Example Card"
          description="This is another sample card component."
          imageUrl={addplusImage}
        />
      </div> */}
      <Header></Header>
      </div>
    </>
  );
}

export default App;
