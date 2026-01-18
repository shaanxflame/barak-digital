// app/contact/page.tsx
export default function ContactPage() {
  return (
    <main className="pt-24 px-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="space-y-6 bg-white p-6 rounded-2xl shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            className="w-full mt-2 p-3 border rounded-lg"
            rows={5}
            placeholder="Write your message..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
