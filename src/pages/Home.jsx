import React from 'react'
import './Pages.css'
import ClipLoader from "react-spinners/ClipLoader";
import NA from '../images/NA.png'
import { Link, useFetcher } from 'react-router-dom'
import { useState , useEffect,CSSProperties} from 'react'
import FilmDetail from './FilmDetail'
import Leftlist from '../components/ListLeft/Leftlist';
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Home = () => {
  
  const [searchMyData, setSearchMyData] = useState("")
  const [searchButton, setSearchButton] = useState("harry")
const [display, setDisplay] = useState(false)
let [loading, setLoading] = useState(true);
let [color, setColor] = useState("#ffffff");
const [addList, setAddList] = useState()
const [resultData, setResultData] = useState([])
const [movie, setMovie] = useState([])

const setDisplayList = (a) => {
  if (movie[0]) { 
    setMovie(a);
    setDisplay(false); 
  } else {
   
    setMovie(a);
    setDisplay(true);
  }
};
const searchData = (e) =>{
 
      setSearchMyData(e.target.value.toLowerCase())
    }
    const searchBtn=(e)=>{
      e.preventDefault();
      if (!searchMyData.trim() ) {
        alert('Zehmet olmasa Film adini duzgun daxil edin')
      }
   else{
      setSearchButton(searchMyData.trim())
      }

    }
    useEffect(()=>{
      fetch(`https://www.omdbapi.com/?s=${searchButton}&apikey=6be6c7a0`)
      .then(res=>res.json())
      .then(data=>{
        setLoading(false)
        setResultData(data.Search)
  }).catch((err)=>(alert('Internet bağlantınızı yoxlayın')))
},[searchButton])

  return (
    <div className='home-page'>
  {/* <Leftlist display={display} resultData={resultData} id={addList}/> */}
  <Leftlist display={display} movie={movie} />

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
  <input type="text" name="" id="" placeholder='Seach...' onChange={searchData} required/>
  <button className='btn-search ' onClick={searchBtn}>Search</button>
</form>
    
</div>
<div className="card-all-div">
{resultData && resultData.length > 0 ? (
    resultData.map((a,b)=>(
      <div className="card" key={b}>
      <img src={a.Poster=='N/A' ?  NA : a.Poster} alt="film-img" />
      <h5>Film Name: <span className='name'>{a.Title}</span></h5>
      <h5 className='second-h5'>Year : <span className='name'>{a.Year}</span></h5>
  
     <div className="bts">

     <Link className='btn-primary-add detail' to={`/filmdetail/${a.imdbID}`}> Detail</Link>
      <button className='btn-primary-add' onClick={()=>{setDisplayList(a)}}>Add To List</button>
    
     </div>
    </div>
    ))):(
      <h3 className='wrong '>
        Film tapmaqda sizə kömək edə bilməyimiz üçün
        <br />
         zəhmət olmasa adı tam daxil edin.
      </h3>
    )
  } 
 
</div>

</div>
    </div>
  )
}

export default Home