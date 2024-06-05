import { useLoaderData } from "react-router-dom"
import JewelleryCard from "../component/cards/JewelleryCard";
// import per1 from '../../assets/image/person1.jpg'
// import per2 from '../../assets/image/person2.jpg'
// import per3 from '../../assets/image/person3.jpg'
import ReviewCard from "../component/cards/ReviewCard";
export default function Home() {

  const jewellerys = useLoaderData();
  console.log(jewellerys)


  const reviews =[
    {
        id:1,
        name :'Tareq jamil',
        review:'This is a great app you can sell things fast. It’s really easy to use',
        adress:'Turkey,Istambul',
        // img:per1
    },
    {
        id:1,
        name :'Junaed jamsed',
        review:'This is a great app you can sell things fast. It’s really easy to use',
        adress:'Turkey,Istambul',
        // img:per2
    },
    {
        id:1,
        name :'Ismail ibn Musa Menk',
        review:'Excellent platform to buy and sell second hand goods. Very easy to use',
        adress:'Turkey,Istambul',
        // img:per3
    },
    {
        id:1,
        name :'Tareq jamil',
        review:'Really happy with Shpock helped me grow my business',
        adress:'Turkey,Istambul',
        // img:per1
    },
    {
        id:1,
        name :'Ismail ibn Musa Menk',
        review:'Very good way to sell safe and secure. Very easy to use',
        adress:'Turkey,Istambul',
        // img:per3
    },
    {
        id:1,
        name :'Junaed jamsed',
        review:'Really happy with Shpock helped me grow my business',
        adress:'Turkey,Istambul',
        // img:per2
    }
]
  return (
    <div className="container mx-auto px-8 ">
      
      all jewellery are there: {jewellerys?.length}
    
    <div className="grid   md:grid-cols-3 gap-4 my-16">
      {
jewellerys?.map(jewellery => <JewelleryCard
key={jewellery._id}
jewellery={jewellery}
></JewelleryCard>

)
      }
    </div>
    {/* bayar review */}
    {/* buyer review */}
<div className='my-10 max-w-6xl mx-auto'>
    <h1 className='text-3xl font-bold text-center'>See what Shpockers are saying</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-20 ">
{
    reviews?.map(reviw=><ReviewCard key={reviw.id} reviw={reviw}></ReviewCard>)
}
    </div>
</div>
    
    
    
    </div>
  )
}
