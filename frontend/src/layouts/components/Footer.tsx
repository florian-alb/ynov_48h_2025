import { Facebook, Twitter, Instagram, Linkedin, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#features" className="hover:underline">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2023 StreamLine. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-700">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-700">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-700">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link to="#" className="text-gray-500 hover:text-gray-700">
              <Linkedin className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
