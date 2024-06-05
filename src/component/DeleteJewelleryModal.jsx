
export default function DeleteJewelleryModal({title,message,closeJewelleryModal,btnName,deleteHandler,jewelleryData}) {
  return (
    <div>
<input type="checkbox" id="delete-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">   
     <label onClick={()=>deleteHandler(jewelleryData)} htmlFor="delete-modal" className="btn btn-primary ">{btnName}</label>
     <button onClick={closeJewelleryModal} className='btn btn-outline'>cancle</button>
    </div>
  </div>
</div>
    </div>
  )
}
