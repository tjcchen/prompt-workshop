"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const initProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    initProviders();
  }, []);

  return (
    <>
      <nav className="flex-between w-full mb-16 pt-3">
        {/* Logo */}
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="AI Prompt Workshop"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">AI Prompt Workshop</p>
        </Link>

        {/* For Debug Purpose */}
        {/* {alert(providers)} */}

        {/* Desktop Nagivation */}
        <div className="sm:flex hidden">
          {session?.user ? (
            <div className="flex gap-3 md:gap-5">
              {/* Create Post */}
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>
              {/* Sign Out Button */}
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>
              {/* Go To /profile */}
              <Link href="/profile">
                <Image
                  src={session?.user?.image}
                  alt="profile"
                  width={37}
                  height={37}
                  className="rounded-full"
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn ml-4"
                  >
                    Sign In {provider.name}
                  </button>
                ))}
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex relative">
          {session?.user ? (
            <div className="flex">
              {/* Dropdown Button */}
              <Image
                src={session?.user?.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => setToggleDropdown((prevState) => !prevState)}
              />
              {/* Dropdown Menu */}
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/create-prompt"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Create Prompt
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                    className="mt-5 w-full black_btn"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn ml-4"
                  >
                    Sign In {provider.name}
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
