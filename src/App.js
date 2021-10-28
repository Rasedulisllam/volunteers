
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Register from './pages/Authentication/Register/Register';
import Registration from './pages/Registration/Registration';
import Admin from './pages/Admin/Admin';
import MyEvents from './pages/MyEvents/MyEvents';
import NotFound from './pages/NotFound/NotFound'
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
                <Home></Home>
            </Route>
            <Route path='/home'>
                <Home></Home>
            </Route>
            <Route path='/register'>
                <Register></Register>
            </Route>
            <PrivateRoute path='/registration'>
                <Registration></Registration>
            </PrivateRoute>
            <PrivateRoute path='/myEvents'>
                <MyEvents></MyEvents>
            </PrivateRoute>
            <PrivateRoute path='/admin'>
                <Admin></Admin>
            </PrivateRoute>
            <Route path='*'>
                <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
