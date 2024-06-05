import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

export default function UpdateJewellry() {

    const {_id, brand,categore,details,photo,name,price} = useLoaderData()

    const updateJewellaryHandler = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const brand = form.brand.value
        const categore = form.categore.value
        const price = form.price.value
        const photo = form.photo.value
        const details = form.details.value;
        const updatjewellery = {name,brand,categore,price,photo,details}
        console.log(updatjewellery)
        // send data to the server
        fetch(`https://jewellery-shop-client-server.vercel.app/updateJewellerys/${_id}`,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(updatjewellery)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
         if(data.modifiedCount>0){
          toast.success('successfully update jewellery')
         }
        })
  }
  return (
    <div className="container mx-auto px-8">
    <form onSubmit={updateJewellaryHandler}>
    <div className="space-y-12">
         
  
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-3xl font-extrabold leading-7 text-center text-gray-900">Update a  Jewellery</h2>
            <p className="mt-1 text-sm leading-6 text-center text-gray-600">Use a permanent address where you can receive mail.</p>
  
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor=" name" className="block text-sm font-medium leading-6 text-gray-900">
                  Product name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    id="name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-3">
                <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                Brand
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="brand"
                    defaultValue={brand}
                    id="brand"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
  
              <div className="sm:col-span-2">
                <label htmlFor="categore" className="block text-sm font-medium leading-6 text-gray-900">
                 Categore
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="categore"
                    defaultValue={categore}
                    id="categore"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div className="sm:col-span-2">
                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                  price
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          </div>
  
          <div className="col-span-full">
                <label htmlFor="details" className="block text-sm font-medium leading-6 text-gray-900">
                  Details
                </label>
                <div className="mt-2">
                  <textarea
                    id="details"
                    name="details"
                    defaultValue={details}
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    
                  />
                </div>
                
              </div>
              <div className="sm:col-span-2 mb-8">
                <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
            photo
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="photo"
                    defaultValue={photo}
                    id="photo"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
  
        
  <input type="submit" value='Update Jewellery'  className="btn btn-info btn-block"/>
       
      </form>
      </div>
  )
}
