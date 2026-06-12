"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] =
    useState(false);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 20);

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    {
      name: "School ERP",
      href:
        "/school-erp-software",
    },
    {
      name: "Attendance",
      href:
        "/attendance-management-system",
    },
    {
      name: "Fees",
      href:
        "/fee-management-system",
    },
    {
      name: "Exams",
      href:
        "/exam-management-system",
    },
    {
      name: "Payroll",
      href:
        "/payroll-management-system",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-300 ${
        scrolled
          ? "border-b border-blue-100 bg-white/90 shadow-sm backdrop-blur-2xl"
          : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <nav className="mx-auto flex h-[96px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
        >
          <Image
            src="/logo-full2.png"
            alt="OptimSkool"
            width={380}
            height={95}
            priority
            className="h-[72px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold transition ${
                pathname === link.href
                  ? "text-blue-600"
                  : "text-slate-500 hover:text-blue-600"
              }`}
            >
              {link.name}

              {pathname ===
                link.href && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              )}
            </Link>
          ))}

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          <Link
            href="/contact"
            className="hidden rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:border-blue-300 hover:bg-blue-100 lg:inline-flex"
          >
            Contact
          </Link>

          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(37,99,235,0.35)] transition hover:brightness-105 hover:shadow-[0_4px_32px_rgba(6,182,212,0.45)]"
          >
            Request Demo
          </Link>

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-blue-600 lg:hidden"
          >
            {menuOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>

        </div>

      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="border-t border-blue-100 bg-white px-6 py-5 shadow-lg lg:hidden">

          <div className="mb-5 flex justify-center">
            <Image
              src="/logo-full2.png"
              alt="OptimSkool"
              width={300}
              height={80}
              className="h-[64px] w-auto object-contain"
            />
          </div>

          <div className="flex flex-col gap-1">

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() =>
                  setMenuOpen(false)
                }
                className="rounded-2xl px-4 py-3 font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

          </div>

        </div>
      )}
    </header>
  );
}