import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold mb-4">Barak Digital</h2>
          <p className="text-gray-400">
            Barak Digital is your trusted source for the latest news, 
            business insights, and job opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/business" className="hover:text-blue-400">Business</Link></li>
            <li><Link href="/jobs" className="hover:text-blue-400">Jobs</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Barak Digital. All rights reserved.
      </div>
    </footer>
  );
}
