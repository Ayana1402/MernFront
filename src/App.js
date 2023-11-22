
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import UserMain from './components/UserMain';
import EmpData from './components/EmpData';
import AddData from './components/AddData';
import Home from './components/Home';
import Update from './components/Update';
import { RequireAuth } from './elements/Auth';
import { Logout } from './elements/Logout';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        <Route path='/emplist' element= {<RequireAuth><Main child = {<EmpData/>}/></RequireAuth>}></Route>
        <Route path='/home' element= {<RequireAuth><Main child = {<Home/>}/></RequireAuth>}></Route>
        <Route path='/update/:id' element= {<RequireAuth><Main child = {<Update/>}/></RequireAuth>}></Route>
        <Route path='/add' element= {<RequireAuth><Main child = {<AddData/>}/></RequireAuth>}></Route>


        {/* <Route path='/emplist' element= { <Main child = {<EmpData/>}/>}></Route>
        <Route path='/home' element= { <UserMain child ={<Home/>}/>}></Route>
        <Route path='/update/:id' element= {<UserMain child ={<Update/>}/>}></Route>
        <Route path='/add' element={ <UserMain child = {<AddData/>}/>}></Route> */}
        
       </Routes> 

    </div>
  );
}

export default App;
