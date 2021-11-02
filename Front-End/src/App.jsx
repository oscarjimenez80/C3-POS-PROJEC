import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom'
import Login from './components/login/Login'
import Product from './components/Products/Productos'
import Sales from './components/Sales/Sale'
import Users from './components/users/User'
import Reports from './components/reportes/Reportes'
import EditProducts from './components/Products/EditProduct'
import AddProducts from './components/Products/AddProduct'
import SaleList from './components/Sales/SaleList';
import SideBar from '../src/components/SideBar/SideBar';


function App() {

  //const [locationState, setlocationState] = useState("")
  const flagAuthorized=false;

  
  return (
    
    
    <>
     
      <Router>
   
      {flagAuthorized && <SideBar />} 
            <Switch>
             
              <Route exact path='/' component={Login} />
              <Route exact path='/Products' component={Product} />
              <Route exact path='/sales' component={Sales} />
              <Route exact path='/SalesList' component={SaleList} />
              <Route exact path='/Users' component={Users} />
              <Route exact path='/Reports' component={Reports} />
              <Route exact path='/Products/:id' component={EditProducts} />
              <Route exact path='/ProductsAdd' component={AddProducts} />

              
            </Switch>
      </Router>
    </>
  );
}

export default App;


