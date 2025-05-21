// src/app/components/Footer.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import contact from "/public/contact.jpg";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Subscribing email:", email);
    setEmail("");
    // You would typically call an API here
  };

  return (
    <footer className=" bottom-0 left-0 right-0 bg-amber-800 text-white z-10">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="mb-4">
                <Image
                  src={contact}
                  alt="Badsha Bangal Logo"
                  width={120}
                  height={80}
                  className="mb-2"
                />
                <div className="text-lg font-serif tracking-wider">
                  BADSHA
                  <br />
                  BANGAL
                </div>
              </div>
            </Link>
          </div>

          {/* Customer Services */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium uppercase mb-4">
              Customer Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:underline">
                  Track your Order
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:underline">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:underline">
                  Schedule an appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium uppercase mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/origins" className="hover:underline">
                  Origins
                </Link>
              </li>
              <li>
                <Link href="/purpose" className="hover:underline">
                  Our Purpose
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:underline">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/giving-back" className="hover:underline">
                  Giving Back
                </Link>
              </li>
            </ul>
          </div>

          {/* Material Care */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-medium uppercase mb-4">
              Material Care
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/jewelry-repair" className="hover:underline">
                  Jewelry Repair
                </Link>
              </li>
              <li>
                <Link href="/sizing" className="hover:underline">
                  Sizing
                </Link>
              </li>
              <li>
                <Link href="/styling-tips" className="hover:underline">
                  Styling Tips
                </Link>
              </li>
              <li>
                <Link href="/allergy-resources" className="hover:underline">
                  Metal Allergy Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-medium mb-2">You can be one step ahead.</h3>
            <p className="text-sm mb-4">
              Sign up to hear about our updates on the dot.
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="py-2 px-3 w-full text-black text-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-amber-800 text-xs font-medium py-2 px-3 whitespace-nowrap"
                >
                  SIGN UP
                </button>
              </div>
            </form>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <Link href="https://instagram.com" aria-label="Instagram">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="https://facebook.com" aria-label="Facebook">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="https://linkedin.com" aria-label="LinkedIn">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer Legal Links */}
        <div className="mt-8 pt-4 border-t border-amber-700 text-xs flex flex-wrap justify-center space-x-4">
          <Link href="/privacy" className="hover:underline">
            PRIVACY POLICY
          </Link>
          <span className="text-amber-700">•</span>
          <Link href="/terms" className="hover:underline">
            TERMS OF USE
          </Link>
          <span className="text-amber-700">•</span>
          <Link href="/sitemap" className="hover:underline">
            SITEMAP
          </Link>
          <span className="text-amber-700">•</span>
          <Link href="/do-not-sell" className="hover:underline">
            DO NOT SELL MY INFORMATION
          </Link>
          <span className="text-amber-700">•</span>
          <Link href="/cookies" className="hover:underline">
            COOKIES
          </Link>
        </div>
      </div>
    </footer>
  );
}
