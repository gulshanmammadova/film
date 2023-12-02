import React from 'react'
import './Pages.css'
import ClipLoader from "react-spinners/ClipLoader";

import { Link } from 'react-router-dom'
import { useState , useEffect,CSSProperties} from 'react'
import FilmDetail from './FilmDetail'
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Home = () => {
  const [searchMyData, setSearchMyData] = useState("")

  const searchData = (e) =>{
      setSearchMyData(e.target.value.toLowerCase())
    
    }
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    
    const [resultData, setResultData] = useState([])
useEffect(()=>{
  fetch('https://www.omdbapi.com/?apikey=6be6c7a0&s=movie&type=movie')
  .then(res=>res.json())
  .then(data=>{
console.log(data.Search);
setLoading(false)
    setResultData(data.Search)
   
  })
},[])

  return (
    <div>
 <div className="sweet-loading">
     
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
<div>
<div className="search-div">
<form action="">
  <input type="text" name="" id="" placeholder='Seach...' onChange={searchData}/>
</form>
    
</div>
<div className="card-all-div">
  {




    resultData.filter(e => e.Title.toLowerCase().includes(searchMyData)).map((a,b)=>(
      <div className="card" key={b}>
      <img src={a.Poster} alt="film-img" />
      <h5>Film Name: <span className='name'>{a.Title}</span></h5>
      <h5 className='second-h5'>Year : <span className='name'>{a.Year}</span></h5>
  
     <div className="bts">

     <Link className='btn-primary-add detail' to={`/filmdetail/${a.imdbID}`}> Detail</Link>
      <button className='btn-primary-add'>Add To List</button>
    
     </div>
    </div>
    ))
  }
 
</div>

</div>
    </div>
  )
}

export default Home