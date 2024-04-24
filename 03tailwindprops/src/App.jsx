import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className=" text-black bg-green-400 rounded-xl p-3 mb-4">
        Tailwind test
      </h1>
      <Card username="tanisha" btnText="sexy tanisha" />
      <Card username="kanika" btnText="hoty kanika" />
    </>
  );
}

export default App;
