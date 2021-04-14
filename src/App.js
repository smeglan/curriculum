import { Home } from "./screens/home/home";
import { Footer } from "./shared/components/footer";

function App() {
  return (
    <div className="container" style={{ maxWidth: "80%" }}>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
