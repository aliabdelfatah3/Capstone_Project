import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

/**
 * Layout component that serves as the primary structure for the application.
 * It wraps the Header and Footer components and uses the Outlet from 
 * react-router-dom to render the matched child routes. This component 
 * provides a consistent layout throughout the application, ensuring that 
 * the header and footer are displayed on every page while the main content 
 * changes based on the current route.
 */

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full pb-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
