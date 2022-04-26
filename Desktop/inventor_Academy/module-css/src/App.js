import React from "react";

import { Panel } from "./components/panel/panel";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { FormContacts } from "./components/form_contacts/formContacts";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <Panel />
      <Header />
      <Main />
      <FormContacts />
      <Footer />
    </>
  );
}

export default App;
