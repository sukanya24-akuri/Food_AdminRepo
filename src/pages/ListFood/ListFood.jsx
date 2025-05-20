import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { deleteFood, getFoodList } from '../../Service/foodservice';
import { data } from 'react-router-dom';

const ListFood = () => {

  const[list,setList]=useState([]);
  const fetchList=async()=>{
    try {
    const data=  await getFoodList();
      setList(data);
      
    } catch (error) {
      toast.error("unable to view the food list")
    }
  }
  useEffect(()=>{
    fetchList()},[]);

const removeFood = async (foodid)=>{
try {
 const res =await deleteFood(foodid);
  if(res)
  {
  toast.success("Food deleted successfully")
 await fetchList();
}
else{
  toast.error("Failed to delete food")
}
} catch (error) {
toast.error("Failed to delete food:"+error)
}
}

   
  return (
<div className="py-5 row justify-content-center">
  <div className="col-11 card">

    <table className='table'>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
       {
        list.map((item,index) =>
          {
          return(
            <tr key={index}>
             <td>
              <img src={item.imageUrl} alt='' height={48} width={55}/>
             </td>
             <td>{item.name}</td>
             <td>{item.category}</td>
             <td>&#8377;{item.price}.00</td>
             <td className='text-danger' onClick={()=>
              removeFood(item.id)
             }>
             <i className="bi bi-trash-fill"></i>
             </td>
            </tr>
          )
        }

        )
       }

      </tbody>
    </table>
  </div>
</div>


  )
}

export default ListFood;
