import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "For Investors", href: "/investors" },
  { name: "Projects", href: "/project/EAYA" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="px-5 lg:px-20 xl:px-28 pt-16 pb-8">
      <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 border-b border-gray-200">
        <div>
          <Image
            width={120}
            height={120}
            src="/images/logo.png"
            alt="ZeroCarbon Africa logo"
          />
          <p className="mt-4 text-sm text-gray-500 font-light max-w-xs leading-relaxed">
            Connecting African smallholder farmers to global carbon markets.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">Get in touch</p>
          <a
            href="mailto:jammutsami@gmail.com"
            className="text-sm text-gray-500 hover:text-primary transition-colors"
          >
            jammutsami@gmail.com
          </a>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4">
        <p className="text-xs text-gray-400">
          {new Date().getFullYear()} &copy; ZeroCarbon Africa. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-400">
          zerocarbon.africa
        </p>
      </div>
    </footer>
  );
}
