"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    about: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.age || isNaN(Number(formData.age))) tempErrors.age = "Valid age is required";
    if (!formData.gender) tempErrors.gender = "Please select gender";
    if (!formData.email.includes("@")) tempErrors.email = "Valid email required";
    return tempErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
    setErrors(validationErrors);
  };

  const handleClose = () => setSubmitted(false);

  return (
    <div className="flex items-center justify-center min-h-screen
                    bg-[rgba(200,225,255,0.15)] p-6">
      <div className="flex flex-col items-center w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold mb-2 text-pink-600 text-center">User Information Form</h2>

        <form
          className="w-full space-y-4 bg-[rgba(255,255,255,0.25)] backdrop-blur-lg
                     rounded-3xl p-8 shadow-lg"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/70 outline-none placeholder-gray-500"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/70 outline-none placeholder-gray-500"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

          <div className="flex gap-4 items-center">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                className="accent-pink-400"
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="accent-pink-400"
              />
              Female
            </label>
          </div>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}

          <textarea
            name="about"
            placeholder="About You"
            value={formData.about}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/70 outline-none placeholder-gray-500"
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 rounded bg-white/70 outline-none placeholder-gray-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <button
            type="submit"
            className="w-full bg-pink-400 text-white font-semibold py-2 rounded-lg hover:bg-pink-300 transition"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg relative"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-3 text-pink-600 hover:text-pink-700 font-bold text-lg"
            >
              ×
            </button>

            <h3 className="text-lg font-bold mb-3 text-center text-pink-500">Submitted Data</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Age:</strong> {formData.age}</p>
            <p><strong>Gender:</strong> {formData.gender}</p>
            <p><strong>About:</strong> {formData.about}</p>
            <p><strong>Email:</strong> {formData.email}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
