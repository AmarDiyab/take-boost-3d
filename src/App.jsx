import Navbar from "./components/Navbar";
import RouterLayout from "./routes/Router";

function App() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <RouterLayout />
    </main>
  );
}

export default App;
