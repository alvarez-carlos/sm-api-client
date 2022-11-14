import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSurveys } from "../store/surveysCtx";

import SurveysQList from "../components/surveys/SurveysQList";
import Wrapper from "../share/Wrapper";

const SurveysQScreen = () => {
  const { id } = useParams();

  const { surveys, fetchSurveysAllQuestions } = useSurveys();

  //   console.log(surveys)
  //   const survey = surveys.find(survey => survey.id === id)
  //   console.log(survey)

  useEffect(() => {
    fetchSurveysAllQuestions(id);
  }, []);

  const renderSurveyDetails = () => {
    if (surveys.questions.length === 0) return <h1>No Surveys Found!</h1>;
    return <SurveysQList data={surveys.questions} surveyId={id}/>;
    // return <div>{id}</div>;
  };

  //   // return 'Hello'
  //   // return renderSurveys();
    return <Wrapper>{renderSurveyDetails()}</Wrapper>;
};

export default SurveysQScreen;