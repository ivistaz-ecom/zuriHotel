import React from "react";

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import MayaSpaBanner from "./MayaSpaBanner";
import MayaSpaContent from "./MayaSpaContent";
import MayaSpaForm from '../Forms/MayaSpaForm'

const index = () => {
  return (
    <div>
      <Header />
      <MayaSpaBanner />
      <MayaSpaContent />
      <MayaSpaForm />
      <Footer />
    </div>
  );
};

export default index;
