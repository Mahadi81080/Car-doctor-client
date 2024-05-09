import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`https://car-doctor-server-gray-mu.vercel.app/checkOut?email=${user.email}`,{withCredentials:true})
      .then((res) => {
        setBookings(res.data);
      });
  }, []);
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-gray-mu.vercel.app/checkOut/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== _id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };
  const handleBookingConfirm = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://car-doctor-server-gray-mu.vercel.app/checkOut/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ status: "confirm" }),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: "Updated!",
                text: "Your post has been updated.",
                icon: "success",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== _id
              );
              const updated = bookings.find((booking) => booking._id === _id);
              updated.status = "Confirm";
              const newBookings = [updated, ...remaining];
              setBookings(newBookings);
            }
          });
      }
    });
  };
  return (
    <div className="my-5 mx-10 min-h-screen p-7 rounded-md">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base font-semibold text-black">
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service_Image</th>
              <th>Service_Name</th>
              <th> Total_Cost</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className="hover"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <th>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="btn btn-sm btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-bold">{booking.title}</td>
                <td className="font-semibold">${booking.price}</td>
                <td>
                  <span className=" font-semibold">{booking.Date}</span>
                </td>
                <td>
                  {status === "confirm" ? (
                    <button className="bg-red-500 py-2 px-3 rounded-lg text-white">
                      Approbe
                    </button>
                  ) : (
                    <button
                      onClick={() => handleBookingConfirm(booking._id)}
                      className="bg-red-500 py-2 px-3 rounded-lg text-white"
                    >
                      Pending
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Service_Image</th>
              <th>Service_Name</th>
              <th> Total_Cost</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
