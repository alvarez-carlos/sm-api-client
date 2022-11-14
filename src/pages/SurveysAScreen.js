import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSurveys } from "../store/surveysCtx";

import SurveysAList from "../components/surveys/SurveysAList";
import Wrapper from "../share/Wrapper";

const SurveysQScreen = () => {
  const { id } = useParams();

  const { surveys, fetchSurveysAllQuestions, fetchSurveysAllAnswers } = useSurveys();

  //   console.log(surveys)
  //   const survey = surveys.find(survey => survey.id === id)
  //   console.log(survey)
 
  useEffect(() => {
    // fetchSurveysAllQuestions(id);
    fetchSurveysAllAnswers({id, page : 1});
  }, []);

  const renderSurveyDetails = () => {
    if (surveys.answers.length === 0) return <h1>No Surveys Found!</h1>;
    return <SurveysAList data={surveys.answers} />;
    // return <div>{id}</div>;
  };

  //   // return 'Hello'
  //   // return renderSurveys();
  return <Wrapper>{renderSurveyDetails()}</Wrapper>;
};

export default SurveysQScreen;