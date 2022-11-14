import { Routes, Route } from "react-router-dom";

import Layout from "./ui/Layout";

import SurveysScreen from "./pages/SurveysScreen";
import SurveysQScreen from "./pages/SurveysQScreen";
import SurveysAScreen from './pages/SurveysAScreen'

import { SurveysCtxProvider } from "./store/surveysCtx";

const App = () => {
  return (
    <SurveysCtxProvider>
      <Layout>
        <Routes>
          <Route path="/surveys" element={<SurveysScreen />} exact />
          <Route path="/surveys/:id/questions" element={<SurveysQScreen />} exact />
          <Route path="/surveys/:id/answers" element={<SurveysAScreen />} exact />
          <Route path="/" element={<SurveysScreen />} />
        </Routes>
      </Layout>
    </SurveysCtxProvider>
  );
};

export default App;
