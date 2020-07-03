import React, { useContext } from 'react';
import Home from '../components/Pages/Home/Home'
import { UserContext } from '../Providers/UserProvider';



const Authentication = ({  loading }) => {
  const user = useContext(UserContext);

  if (loading) return null;
  

  return <div><Home {...user}/></div>;
};

export default Authentication;
