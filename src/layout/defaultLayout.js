import React from "react";
import { Header } from "./partials/header";
import { Footer } from "./partials/footer";
export const DefaultLayout = ({children}) => {
  return (
    <div className="Defalt-Layout">
      <header className="header">
        <Header />
      </header>

      <main className="main">{children}</main>
       
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};
