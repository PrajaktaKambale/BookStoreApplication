import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen  justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
          {/* if there is a button in form, it will close the modal */}

          <h3 className="font-bold text-4xl">Contact Us</h3>
          {/* name */}
          <div className="mt-4 space-x-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-80 py-1 px-3 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          {/* email */}
          <div className="mt-4 space-x-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 py-1 px-3 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* message */}
          <div className="mt-4 space-x-2">
            <span>Message</span>
            <br />
            <input
              type="textarea"
              placeholder="Type your message"
              className="w-80 py-1 px-3 border rounded-md outline-none"
              {...register("message", { required: true })}
            />
            <br />
            {errors.message && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* button */}
          <div className="flex justify-start mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
