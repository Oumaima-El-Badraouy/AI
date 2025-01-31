import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
   
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

    // Vérification email
    if (!formData.email.includes("@") || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email invalide.";
    }

    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      alert("Connexion réussie !");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Connexion
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          
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
              placeholder="Mot de passe"
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
            Se connecter
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="border-b w-full"></div>
          <span className="px-2 text-gray-500">ou</span>
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
          Pas encore inscrit ?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
