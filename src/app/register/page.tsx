"use client"

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="flex items-center justify-center min-h-[70vh] bg-slate-50 dark:bg-black">
          <div className="p-8 bg-white rounded-xl shadow dark:bg-slate-900 text-center">
            <h2 className="mb-4 text-2xl font-bold">Thank you!</h2>
            <p className="mb-6">Your application has been received.</p>
            <Link href="/" className="px-4 py-2 text-white bg-teal-600 rounded hover:bg-teal-700">Return Home</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-black">
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-xl shadow dark:bg-slate-900">
          <h1 className="mb-6 text-2xl font-bold text-center">Apply Now</h1>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1 text-sm font-medium">First Name</label>
            <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1 text-sm font-medium">Last Name</label>
            <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" />
          </div>
          <button type="submit" className="w-full px-4 py-2 font-semibold text-white bg-teal-600 rounded hover:bg-teal-700">Submit</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
