import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const {_id, img, price, title } = service;
  return (
    <div className="card bg-base-100 border border-gray-200">
      <figure className="px-6 pt-6">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{title}</h2>
        <div className="text-[#ff3811] font-semibold flex justify-between items-center">
          <p>Price : ${price}</p>
          <Link to={`/checkOut/${_id}`}><FaArrowRight /></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
