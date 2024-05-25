"use client"

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className={"bg-xp h-[100vh] bg-cover bg-center min-h-screen"}>
            <Navbar/>
            <div className="">
                <div className="">
                    Main
                </div>
            </div>
            <Footer/>
        </main>
    );
}
