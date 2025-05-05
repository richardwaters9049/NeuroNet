// frontend/components/Navbar.tsx

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    return (
        <nav className="bg-primary dark:bg-primary-dark shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Left Section: Logo or Title */}
                <div className="text-white text-xl font-bold">NeuroNet</div>

                {/* Right Section: Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" passHref>
                        <span className="text-white hover:text-primary-400 cursor-pointer">Home</span>
                    </Link>
                    <Link href="/dashboard" passHref>
                        <span className="text-white hover:text-primary-400 cursor-pointer">Dashboard</span>
                    </Link>
                    <Link href="/about" passHref>
                        <span className="text-white hover:text-primary-400 cursor-pointer">About</span>
                    </Link>
                    <Button variant="outline" className="text-black hover:bg-primary-200">Logout</Button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button className="text-black" aria-label="Toggle Menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
