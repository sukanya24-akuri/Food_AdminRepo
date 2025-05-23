import React, { useEffect, useState } from 'react';
import Upload from '../../assets/upload.jfif';
import { addFood } from '../../Service/foodservice';
import { toast } from 'react-toastify';


const AddFood = () => {
   const [image, setImage] = useState(null);
   const [data,setData]=useState({
    name: '',
    description: '',
    category: '',
    price:''
   });
   const onChangeHandler=(event)=>{
    const name=event.target.name;
    
    const value=event.target.value;
    setData(data=>({...data,[name]:value}));
   }

  useEffect(
    ()=>{
      console.log(data)
    },[data]
  )

  const onSubmitHandler=async (event)=>
    {
    event.preventDefault();
      if(!image)
      {
        toast.error("please select an image github");
       
        return;
      }

  
try {
await addFood(data,image);
toast.success("Food added successfully");
setData({name:'',description:'',category:'',price:''})
setImage(null);
} 
catch (error)
 {
  toast.error("Faild to add food")
  
}
}
return (
        <div className="mx-2 mt-2">
  <div className="row">
    <div className="card col-md-4">
      <div className="card-body">
        <h2 className="mb-4">Add Food</h2>
        <form onSubmit={onSubmitHandler}> 

        <div className="mb-3">
            <label htmlFor="image" className="form-label">
              <img src={image?URL.createObjectURL(image):Upload} alt="" width={89}/>
          </label>
            <input type="file" className="form-control" id="image"  hidden onChange={(e)=>setImage(e.target.files[0])} />
            </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required name='name' onChange={onChangeHandler}value={data.name}/>
            </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="message" rows="3" required  name='description' onChange={onChangeHandler}value={data.description}></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select name='category' id='category' className="form-control" onChange={onChangeHandler}value={data.category}>
            <option value="">choose your food item</option>
            <option value="Briyani">Briyani</option>
            <option value="Cake">Cake</option>
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Rolls">Rolls</option>
            <option value="Salab">salab</option>
            <option value="Icecream">Icecream</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" name="price" id="price" className="form-control" onChange={onChangeHandler}value={data.price}></input>
            </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default AddFood;
