import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PersonalInfo from "./pages/form-pages/personal-info";
import TechnicalSkillset from "./pages/form-pages/technical-skillset";
import Covid from "./pages/form-pages/covid";
import RedberrianInsights from "./pages/form-pages/redberrian-insights";
import Submit from "./pages/form-pages/submit";
import ThanksMessage from "./pages/thanks-message";
import SubmittedForms from "./pages/submitted-forms";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home exact />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/technical-skillset" element={<TechnicalSkillset />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/redberrian-insights" element={<RedberrianInsights />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/thanks-message" element={<ThanksMessage />} />
        <Route path="/submitted-forms" element={<SubmittedForms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
