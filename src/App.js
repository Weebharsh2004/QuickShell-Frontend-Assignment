import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/NavBar/navbar';
import Dashboard from './components/DashBoard/Dashboard';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loader from './components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return <>
    {
    allTickets ?
    <>
      <Navbar/>
      <Dashboard/>
    </>
   : <Loader/>
  }
  </>
    
}

export default App