import { useContext, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authprovaider/Authprovaider';
import toast from 'react-hot-toast';
const Login = () => {
  const [error, setError] = useState('');
  const { loginWithEmailPass, googleLogin } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const location = useLocation();
  const from = location?.state?.pathname || '/';
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    setError('');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPass(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('Login success');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(er => setError(er.message));
  };

  const handleGoogleSignIn = () => {
    setError('');
    googleLogin()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('Login success');
        navigate(from, { replace: true });
      })
      .catch(er => setError(er.message));
  };
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="bg-white lg:w-2/5 p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login to Toy House</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter name"
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col relative">
            <label htmlFor="password" className="mb-1">
              Password:
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter password"
              className="p-2 border rounded pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute  inset-y-0 top-1/2 right-0 flex items-center px-2 focus:outline-none"
            >
              {passwordVisible ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          <p className="text-red-300">{error}</p>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-500 w-full  py-2 px-4 rounded hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className="label-text">
            Do not have an account?
            <Link className="text-blue-500" to="/register">
              Register
            </Link>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p>Or sign in with:</p>
          <button
            className="flex w-fit mx-auto items-center bg-white border p-2 rounded mt-2"
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google Logo"
              className="w-6 mr-2"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
