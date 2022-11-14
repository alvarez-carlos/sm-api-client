import React, { useEffect } from "react";

import { useSurveys } from "../store/surveysCtx";

import SurveysList from "../components/surveys/SurveysList";

import Wrapper from "../share/Wrapper";

const SurveysScreen = () => {
  const { surveys, fetchAllSurveys } = useSurveys();

  useEffect(() => {
    fetchAllSurveys();
  }, []);

  // console.log(surveys)

  const renderSurveys = () => {
    if (surveys.surveys.length === 0) return <h1>No Surveys Found!</h1>;
    return <SurveysList data={surveys.surveys} />;
  };

  // return 'Hello'
  // return renderSurveys();
  return <Wrapper>{renderSurveys()}</Wrapper>;
};

export default SurveysScreen;