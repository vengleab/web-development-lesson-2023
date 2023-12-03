import HeaderComponent from "./components/HeaderComponent";

function App() {
  const cats = ["Phones", "Laptops", "Tablets", "Accessories"];

  return (
    <div>
      <HeaderComponent />
      <div>
        {
          cats.map(cat => {
            return <h1>{cat}</h1>;
          })
        }
      </div>
    </div>
  );
}

export function Button() {
    return <button>Click me</button>;
}


export default App;
