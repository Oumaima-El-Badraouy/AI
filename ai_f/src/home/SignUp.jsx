import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Reset error message when user types
  };

  const validate = () => {
    let newErrors = {};

    // Vérification du nom
    if (formData.name.length < 3) {
      newErrors.name = "Le nom doit contenir au moins 3 caractères.";
    }

    // Vérification de l'email
    if (!formData.email.includes("@") || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide.";
    }

    // Vérification du mot de passe
    if (formData.password.length < 8) {
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères.";
    }
    if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = "Ajoutez au moins une majuscule.";
    }
    if (!/[a-z]/.test(formData.password)) {
      newErrors.password = "Ajoutez au moins une minuscule.";
    }
    if (!/\d/.test(formData.password)) {
      newErrors.password = "Ajoutez au moins un chiffre.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      newErrors.password = "Ajoutez un caractère spécial.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Sign Up Data:", formData);
      alert("Inscription réussie !");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Create an account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
           Sign up
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="border-b w-full"></div>
          <span className="px-2 text-gray-500">or</span>
          <div className="border-b w-full"></div>
        </div>

        <div className="flex flex-col items-center space-y-2">
        <button className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-black">


            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900">
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              alt="Facebook"
              className="w-5 h-5"
            />
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
