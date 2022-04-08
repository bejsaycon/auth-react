import {useState, useCallback} from "react";
import './styles/RandomApp.css'
import Welcome from "./components/Welcome";
import Outputbox from "./components/Outputbox";
import InputForm from "./components/InputForm";
import { useFetch } from "./custom_hooks/useFetch";
import { useNavigate } from "react-router-dom";
import useAuth from "./custom_hooks/useAuth";

function RandomApp() {
  const [seed, setSeed] = useState('');
  const url = `https://randomuser.me/api/?seed=${seed}`;
  const data = useFetch(url);
  const navigate = useNavigate();
  const {setAuth} = useAuth();
  
  const logout = async () => {
    setAuth(false);
    navigate('/login');
}
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setSeed(event.target.seed.value);
      event.target.reset();
    },
    [data],
  )
  
  return (
    <div className="container">
      <InputForm handleSubmit={handleSubmit}/>
      {seed==='' ? <Welcome /> :  <Outputbox usersData={data} />}
                <button onClick={logout}>Sign Out</button>
            
    </div>
  );
}
export default RandomApp;
