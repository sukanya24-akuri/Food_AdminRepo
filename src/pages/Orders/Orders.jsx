import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { asset } from '../../assets/assets';


const Orders = () => {
   
   const[data,setData] =useState([]);

   const fetchOrders= async ()=>{
    const response= await axios.get("http://localhost:8081/api/order/all");
     console.log("Fetched Orders:", response.data);
    setData(response.data);
   };
 const updateStatus=async (event,orderID)=>{
  const response= await axios.patch(`http://localhost:8081/api/order/status/${orderID}?status=${event.target.value}`);
 if(response.status===200){
  await fetchOrders();
 }
 };
   useEffect(()=>{
    fetchOrders();
   },[]);

  return (
    <div className="container">
        <div className="py-5 row justify-content-center">
            <div className="col-11 card">
                <table className="table table-responsive"> 
                    <tbody>
                        {
                            data.map((order,index)=>{
                                return(
                                    <tr key={index}>
                                      <td>
                                        <img src={asset.parcel}  alt="" height={48} width={48}/>
                                      </td>
                                      <td>
                                      <div>
                                          {order.orderedItems.map((item,index)=>{
                                            if(index===order.orderedItems.length-1)
                                            {
                                                return item.name+" X "+item.quantity;
                                            }
                                            else{
                                                return item.name +" X "+item.quantity+ " ,";
                                            }
                                        })}
                                      </div>
                                        <div>{order.address}

                                        </div>
                                      </td>
                                      <td>&#8377;{order.amount?.toFixed(2) ?? "0.00"}</td>
                                      <td>Items:{order.orderedItems.length}</td>
                                      <td>
                                        <select  className="form control" onChange={(event)=>updateStatus(event,order.id)} value={order.orderStatus}>
                                          <option value="Food Preparing">Food Preparing</option>
                                          <option value="Out for Delivery">Out for Delivery</option>
                                          <option value="Delivered">Delivered</option>
                                        </select>
                                      </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>

  )
}

export default Orders;


