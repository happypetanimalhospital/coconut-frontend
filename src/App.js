import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import jwt from 'jsonwebtoken';
import { useEffect, useState } from 'react';

function App() {
	const [ profile, setProfile ] = useState();
  const routing = useRoutes(routes(profile));

  useEffect(() => {
    setProfile(jwt.decode(localStorage.getItem('jwtToken')))
    console.log('aa',jwt.decode(localStorage.getItem('jwtToken')) )
	}, []);
  return (
    <div className="App">
      {routing}
    </div>
  );
}

export default App;
