import React, { ReactNode } from "react";
import styled from "styled-components";
import Head from "next/head";

import Navbar from "./Navbar";
import Menu from "./Menu";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Test Task Website</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
    </Head>
    <MainHeader>
      <Navbar>{children}</Navbar>
    </MainHeader>
    <MainContent>{children}</MainContent>
    <MainFooter>
      <div className="div-footer">
        <span className="">©2021 Jomor Design Inc. - All Rights Reserved</span>
      </div>
    </MainFooter>
  </div>
);

const MainHeader = styled.div``;

const MainContent = styled.div``;

const MainFooter = styled.div``;

export default Layout;
