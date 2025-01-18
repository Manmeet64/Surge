import React, { Suspense } from "react";
import Landing from "./Pages/Landing";
import Features from "./Pages/Features";

const Footer = React.lazy(() => import("./Pages/Footer"));

function App() {
  return (
    <section>
      <Landing />
      <Features />
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </section>
  );
}

export default App;
