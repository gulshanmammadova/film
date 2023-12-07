import React from 'react';
import { useSelector } from 'react-redux';
import './Pages.css'
const List = () => {
  const myList = useSelector((state) => state.listSlice.value);
console.log(myList[myList.length-1][2][0])

  return (
    <div className='parent'>
      <ul>
        {myList.length !== 0 &&
          myList[myList.length - 1].map((item, index) => (
            <li key={index}>
              <p className='listName'>{item[0]}</p>
              <ul>
                {item[1].map((innerItem, innerIndex) => (
                  <li className='liInner' key={innerIndex}><img src={innerItem.Poster} alt="" />{innerItem.Title}   ({innerItem.Year})</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
