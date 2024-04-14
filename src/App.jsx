import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import MealsShow from "./Components/Meals/MealsShow";


function App() {
  return (
    <>
    <Cart/>
    <Header/>
    <main>
      <MealsShow/>
    </main>
    </>
  );
}

export default App;
