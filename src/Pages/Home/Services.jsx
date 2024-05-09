import { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://car-doctor-server-gray-mu.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
  return (
    <div className="my-8">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-[#ff3811] text-xl">Service</h1>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="py-6">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        
        {
            services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
