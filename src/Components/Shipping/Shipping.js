import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Context/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          {...register("name", { required: true })}
        />
        {errors.name && <span className="error">This field is required</span>}
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}
        <input placeholder="Address" {...register("address")} />
        <input placeholder="City" {...register("city")} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Shipping;
