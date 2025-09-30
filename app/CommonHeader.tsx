// components/common/commonHeader/CommonHeader.tsx
"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "FAQ", href: "/faq" },
  { label: "About IPDuck", href: "/about" },
];

const CommonHeader = memo(function Header() {
  const navItems = useMemo(() => NAV_ITEMS, []);

  return (
    <>
      <header className="sticky top-0 inset-x-0 w-full mx-auto bg-white z-[9999]">
        <div className="flex items-center justify-between max-w-[1280px] h-[4.1875rem] mx-auto d:px-[8.125rem] px-5">
          <div className="flex items-center">
            <Link className="relative w-[4.0625rem] h-[1.9712rem]" href={"/"}>
              <Image
                className="object-contain"
                src="/images/logo.png"
                alt="IPDuck Logo"
                fill
                priority
                sizes="4.0625rem"
              />
            </Link>

            <nav className="d:flex hidden items-center space-x-12 ml-24">
              {navItems.map((item) => (
                <Link
                  className="flex items-center"
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
});

export default CommonHeader;
