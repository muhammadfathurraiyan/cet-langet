import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </>
  );
}
