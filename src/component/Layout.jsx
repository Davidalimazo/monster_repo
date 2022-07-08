
import './layout.css';
import { useState } from 'react';
import { useEffect } from 'react';
import MonsterCard from './MonsterCard';
import SearchBox from './SearchBox';

function Layout() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
          .then(json =>{ setMonsters(json); setSearchResult(json)})
    }
    fetchData();
    return ()=>console.log("clean up");
  },[])

  const filterResult =(val)=>{
    setSearchInput(val);
    if(val.length > 0){
      let suggestions = monsters.filter(monster=>{
        let regex = new RegExp(`${val}`, 'gi');
        return monster.name.toLowerCase().includes(val);
      })
      setSearchResult(suggestions)
    }
    else{
      setSearchResult(monsters)
    }
  }

  
  return (
    <div className="App">
      <SearchBox searchInput={searchInput} filterResult={filterResult} />
      <MonsterCard searchResult={searchResult}/>
    </div>
  );
}

export default Layout;
