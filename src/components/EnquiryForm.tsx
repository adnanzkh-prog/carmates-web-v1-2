"use client";

import { useState } from "react";

export default function EnquiryForm({ listingId }: { listingId: string }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        body: JSON.stringify({ ...form, listingId }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-6 p-4 bg-green-50 rounded text-center">
        <p className="font-bold">Inquiry Received! 🎉</p>
        <p>One of our Mates will reply within 30 minutes. Meanwhile, you can WhatsApp us directly.</p>
        <a
          href="https://wa.me/61400000000"
          className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          WhatsApp a Mate
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-gray-50 p-4 rounded-lg">
      <h3 className="text-xl font-bold">Enquire Now</h3>
      <input
        type="text"
        placeholder="Your name"
        required
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email address"
        required
        className="w-full p-2 border rounded"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone number"
        required
        className="w-full p-2 border rounded"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <textarea
        placeholder="Anything specific you'd like to know?"
        className="w-full p-2 border rounded"
        rows={3}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded w-full hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="text-xs text-gray-500 text-center">
        We'll reply within <strong>30 minutes</strong> (SLA commitment)
      </p>
    </form>
  );
}
