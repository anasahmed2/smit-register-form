"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { useState } from "react";
import Image from "next/image";

export default function Header({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      className="!fixed"
      isBordered
      isBlurred={true}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="text-lg font-bold text-inherit highlight drop-shadow-2xl">SMIT CON&apos;23</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className={page === "comp" ? "flex" : "hidden sm:flex gap-4"} justify="end">
        {page === "comp" ? (
          <NavbarItem>
            <Link
              href="/"
              className="scroll-smooth hover:text-[#874AFE] active:text-[#874AFE]"
            >
              Back to Home
            </Link>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem>
              <Link
                href="/#about"
                className="scroll-smooth hover:text-[#874AFE] active:text-[#874AFE]"
              >
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/#timeline"
                className="scroll-smooth hover:text-[#874AFE] active:text-[#874AFE]"
              >
                Event Timeline
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="/#help"
                className="scroll-smooth hover:text-[#874AFE] active:text-[#874AFE]"
              >
                Help
              </Link>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
      <NavbarMenu className="scrollbar-hide">
        <NavbarMenuItem>
          <Link
            className="w-full hover:text-[#874AFE] active:text-[#874AFE]"
            onClick={() => setIsMenuOpen(false)}
            href="/#about"
            size="lg"
          >
            About
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full hover:text-[#874AFE] active:text-[#874AFE]"
            onClick={() => setIsMenuOpen(false)}
            href="/#timeline"
            size="lg"
          >
            Event Timeline
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full hover:text-[#874AFE] active:text-[#874AFE]"
            onClick={() => setIsMenuOpen(false)}
            href="/#help"
            size="lg"
          >
            Help
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
      <NavbarMenuToggle
        justify="end"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className={page === "comp" ? "hidden" : "sm:hidden"}
      />
    </Navbar>
  );
}
