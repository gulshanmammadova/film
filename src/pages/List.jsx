import React from 'react';
import { useSelector } from 'react-redux';
import './Pages.css'
import NA from '../images/NA.png'

const List = () => {
  const myList = useSelector((state) => state.listSlice.value);

// console.log(myList[myList.length-1][0][1]);
  return (
    <div className='parent'>
      <ul>
        {myList.length !== 0 ? (
          myList[myList.length - 1].map((item, index) => (
            <li key={index}>
              <p className='listName'>{item[0]}</p>
              <ul>
                {item[1].map((innerItem, innerIndex) => (
                  <li className='liInner' key={innerIndex}><img src={innerItem.Poster=='N/A' ?  NA : innerItem.Poster} alt="" />{innerItem.Title}   ({innerItem.Year})</li>
                ))}
              </ul>
            </li>
          ))) :(
            <p className='wrong wrong2'>Siyahınız Boşdur !!!</p>
          )
        }
      </ul>
    </div>
  );
};

export default List;
