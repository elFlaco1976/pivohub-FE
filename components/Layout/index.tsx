import React, { FC } from "react";
import Head from "next/head";
import "./index.scss";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Beers</title>
        <link href="https://fonts.googleapis.com/css?family=ABeeZee" rel="stylesheet" />
      </Head>
      <header className="basic-layout-header">
        <h1>
          Una cerveza SVP!
        </h1>
      </header>
      <div className="basic-layout-body">
        {children}
      </div>
      <footer className="basic-layout-footer">
        PivoHub Inc.
      </footer>
    </div>
  );
};

export default Layout;
