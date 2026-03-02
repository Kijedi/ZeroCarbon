"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import Link from "next/link";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "For Investors", href: "/investors" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white/95 top-0 sticky z-50 shadow-lg backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 py-1"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">ZeroCarbon</span>
            <img
              className="h-16 lg:h-20 w-auto"
              src="/images/logo.png"
              alt="ZeroCarbon Africa logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary underline-offset-8 hover:underline duration-150 ease-in-out transition-all"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/investors"
            className="ml-4 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors duration-150"
          >
            Invest in ZeroCarbon
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">ZeroCarbon</span>
              <img className="h-12 w-auto" src="/images/logo.png" alt="ZeroCarbon Africa logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/investors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white shadow-sm"
                >
                  Invest in ZeroCarbon
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
