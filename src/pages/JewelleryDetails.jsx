import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import DeleteJewelleryModal from "../component/DeleteJewelleryModal"
import toast from "react-hot-toast"


export default function JewelleryDetails() {
  const jewellery = useLoaderData()
  const {_id, brand,categore,details,photo,name,price} = jewellery

  const [deleteJewellery,setDeleteJewellery]=useState(null)
  const closejewelleyModal=()=>{
    setDeleteJewellery(null);
  }
  const handleDeleteJewellery= _id=>{
    console.log(_id)
    fetch(`https://jewellery-shop-client-server.vercel.app/jewellerys/${_id}`,{
      method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        toast.success('successfully Delete jewellery')
      }

    })
  }
  return (
    <div className="container mx-auto p-8"> 
<h1 className="text-center text-3xl font-extrabold">Jewellery Details </h1>
{
  jewellery ?
  <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p>Brand: {brand}</p>
    <p>Categore: {categore}</p>
    <p className="font-bold">price: {price} $</p>
    
    <div className="card-actions justify-end">
      <Link to={`/updateJewellery/${_id}`}><button className="btn btn-primary">edit</button></Link>
      <label onClick={()=>setDeleteJewellery(_id)} htmlFor="delete-modal" className="btn btn-primary">delete</label>
      {/* <button className="btn btn-primary"></button> */}
    </div>
  </div>
</div>
:
<h1 className="text-center text-6xl font-extrabold text-red-500 py-12">Already you delete this jewellery </h1>
}

{/* delet modal */}
{
  deleteJewellery && <DeleteJewelleryModal
  title = {`are you sure to delete ${name}`}
message ={`if you delete ${name},it can not undone`}
closeJewelleryModal={closejewelleyModal}
btnName = {'Delete'}
deleteHandler= {handleDeleteJewellery}
jewelleryData = {deleteJewellery}
  ></DeleteJewelleryModal>
}
    </div>

  )
}
