import { MdEmail } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import '../index.css'

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">

      <div className="card-body bg-transparent flex items-center">
        <h3 className="text-xl font-semibold mb-10">Login</h3>
        <fieldset className="fieldset">
          <label className="text-color-base font-medium">Email</label>
          <div className="relative">
            <MdEmail  className="absolute top-1/5 left-1 z-10 pl-1 text-xl text-neutral-400"/>
            <input type="email" className="input bg-neutral-100 outline-none rounded-lg mb-4 pl-7" placeholder='Email' />
          </div>
          <label className="text-color-base font-medium">Password</label>
          <div className="relative sm:min-w-80">
            <input type="password" className="input bg-neutral-100 outline-none rounded-lg" placeholder="*******" />
            <FaEyeSlash className="absolute right-3 top-1/4 text-lg text-neutral-500"/>
          </div>
          <button className="btn btn-neutral mt-4 mx-auto w-1/2 md:w-full">Login</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
