"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DashboardLayout from "../dashboardLayout";

const schema = yup
  .object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <DashboardLayout>
      <div className="h-fit w-full px-8 bg-white py-5">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Course
            </label>
            <input
              type="text"
              name="courseId"
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
              placeholder="Select a course"
            />
            <p className="text-red-500 text-sm font-light"></p>
          </div>
          <div className="w-full">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="course"
            >
              Course
            </label>

            <input
              type="text"
              name="courseId"
              className="w-full font-normal py-2.5 px-3 bg-white text-gray-700 border rounded outline-none"
              placeholder="Select a course"
            />
            <p className="text-red-500 text-sm font-light mt-3">jnhaus</p>
          </div>
          {/* <input {...register("firstName")} />
          <p>{errors.firstName?.message}</p>

          <input {...register("age")} />
          <p>{errors.age?.message}</p> */}

          <input type="submit" className="mt-5 hover:cursor-pointer" />
        </form>
      </div>
    </DashboardLayout>
  );
}
