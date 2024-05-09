
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  console.log(service);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  
    const formData = { ...data, ...service };
    console.log(formData);
    fetch("https://car-doctor-server-gray-mu.vercel.app/checkOut", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Order Confirm Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <section className="p-6 bg-[#f3f3f3] my-7">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12 p-10"
        >
          <fieldset className=" p-6 rounded-md shadow-sm">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <label className="form-control col-span-full sm:col-span-3">
                <input
                  type="text"
                  name="First_name"
                  placeholder="First Name"
                  className="input input-bordered "
                  {...register("First_name")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <input
                  type="text"
                  name="Last_name"
                  placeholder="Last Name"
                  className="input input-bordered "
                  {...register("Last_name")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <input
                  type="date"
                  name="Date"
                  className="input input-bordered"
                  {...register("Date")}
                />
              </label>
              <label className="form-control col-span-full sm:col-span-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered "
                  {...register("email")}
                />
              </label>
              <label className="form-control col-span-full">
                <textarea
                  className="textarea textarea-bordered h-28"
                  name="Message"
                  placeholder="Your Message"
                  {...register("Message")}
                ></textarea>
              </label>
              <input
                type="submit"
                value="Order Confirm"
                className="btn btn-block bg-[#ff3811] text-white col-span-full"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default CheckOut;
