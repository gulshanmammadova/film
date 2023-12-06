import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState,useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import {addlist} from '../../listSlice'
const Leftlist = ({display,movie}) => {
  const [listItem, setlistItem] = useState([]);
  const [list, setlist] = useState([]);
  const listToOtherPage = useSelector((state)=>state.listSlice.value)
const dispatch=useDispatch()
const [dezdList, setDezdList] = useState([])
  const [listTitle, setlistTitle] = useState();

  const [inp, setInp] = useState('');

  // console.log(listItem)
  useEffect(() => {

      setlistItem( [...listItem,movie])
    
    
  }, [movie])
  const textInpHandler=(e)=>{
setInp(e.target.value)
  }
 const  createNewList =()=>{
  if (inp.trim() !== '') {
    setlistTitle(inp);
    setlist([...list,  [[inp], [...listItem]]]);
    setInp('');
    setlistItem([]);
    dispatch(addlist(list))
  }
  
  
}

  const deleteListItem = (id) => {
    const updatedList = listItem.filter(item => item.imdbID !== id);
   
    setlistItem(updatedList);
  };
  return (
    
            <div className='list-div ' style={{ display: display ? 'block':'none', }} >
      <input type="text" name="" id="" placeholder='Add List Name...' onChange={textInpHandler}/>
     <div  className='inner-list-inp'>
<div className='ul-div'>
  {/* {console.log(listItem.length>2 ? 'saalam ekrana cixar':'ekrana cixarma')} */}
<ul>
  {
  listItem.map((listItem,index)=>(
      <li key={index}>
      {/* {console.log(listItem,listItem.imdbID)} */}
      {/* <img className='list-item-img' src="https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_SX300.jpg" alt="List item img"  /> */}
    <p>{listItem.Title} ( {listItem.Year} )</p><FontAwesomeIcon icon={faCircleXmark} onClick={()=>{deleteListItem(listItem.imdbID)}} />
    </li>
    ))
  }
 
 
</ul>
</div>
     </div>
<button  className='create-new-list' onClick={createNewList}>Create List</button>
      </div>
  )
}

export default Leftlist