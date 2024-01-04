import { useContext, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authprovaider/Authprovaider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import UseTitle from '../../Title/Title';

const Register = () => {
  UseTitle('| Register');
  const { createUser, googleLogin } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, steError] = useState('');
  const handlerRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        updateUser(loggedUser, name, image);
        toast.success('Registation success');
      })
      .catch(er => steError(er.message));
  };

  const updateUser = (user, name, image) => {
    updateProfile(user, {
      displayName: name,
      photoURL: image,
    });
  };

  // handler google login here
  const handleGoogleSignIn = () => {
    googleLogin()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success('Registation success');
      })
      .catch(er => steError(er.message));
  };
  return (
    <div className="flex items-center justify-center h-[calc(100vh-80px)]">
      <div className="bg-white lg:w-2/5 p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register to Toy House</h2>
        <form className="space-y-4" onSubmit={handlerRegister}>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Name:
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Enter name"
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image" className="mb-1">
              Image URL:
            </label>
            <input
              type="url"
              id="image"
              name="image"
              placeholder="image url"
              className="p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
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
              Register
            </button>
          </div>
        </form>

        <div className="text-center mt-5">
          <p className="label-text">
            Already have an account?{' '}
            <Link className="text-blue-500" to="/login">
              Login
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

export default Register;
