import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import AddStudent from './pages/AddStudent/AddStudent';
import UpdateStudent from './pages/UpdateStudent/UpdateStudent';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          
          <Route  path="/add-student">
            <AddStudent />
          </Route>
          <Route  path="/update-student/:id">
            <UpdateStudent />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
