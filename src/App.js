import { Home } from "./screens/home/home";
import { Footer } from "./shared/components/footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Redirect
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/:language">
          <HomeContainer></HomeContainer>
        </Route>
        <Route path="/">
          <Redirect to="/esp" />
        </Route>
      </Switch>
    </Router>
  );
}

const HomeContainer = () => {
  let { language } = useParams();
  return (
    <div className="container" style={{ maxWidth: "100%" }}>
      <Home language={language}></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
