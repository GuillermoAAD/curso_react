import React from "react";
import ReactDOM from "react-dom/client";

import { Greeting, UserCard } from "./Greeting";
import Isaac from "./Isaac";
import Product from "./Product";
import Xd from "./Xd"
import { Toaster, toast } from "react-hot-toast"
import Castor from "./Castor";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Greeting    />
    <Greeting />
    <Greeting />
    <Greeting />
    <UserCard />
    <Product /> */}

    <Isaac nombre={`isaac`}>
      <p>xdkalkndlksnldknmasld sadklaskld askldnaskl ndklasd</p>
    </Isaac>

    <Castor />
  </>
);
