import {useState, useCallback} from "react";
import Welcome from "./components/Welcome";
import Outputbox from "./components/Outputbox";
import InputForm from "./components/InputForm";
import { useFetch } from "./custom_hooks/useFetch";

function RandomApp() {
  const [seed, setSeed] = useState('');
  const url = `https://randomuser.me/api/?seed=${seed}`;
  const data = useFetch(url);
  
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
    </div>
  );
}
export default RandomApp;
