import { Link } from "react-router-dom"

export default function JewelleryCard({jewellery}) {
  // const {user}=useContext(authContext)
  //  console.log(jewellery)
    const {_id, brand,categore,details,photo,name,price} = jewellery
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
      <div className="badge badge-secondary">{price} $</div>
      </h2>
    
   <div>
  
   </div>

    <div className="card-actions justify-end">
     
      <Link to={`/jewellerys/${_id}`}><button className="btn btn-outline">Show Details</button></Link>
     
    </div>
  </div>
</div>
    </div>
  )
}
