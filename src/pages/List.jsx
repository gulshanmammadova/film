import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

const List = () => {
  const myList=useSelector((state)=>state.listSlice.value)
  for (let index = 1; index < myList.length; index++) {
    
    
    console.log(myList[index][0][0]);
    console.log(myList[index][0][1][1]);
    console.log(myList[index][0][1][2]);


    }
  return (
    
    <div>
{

}
    </div>
  )
}

export default List