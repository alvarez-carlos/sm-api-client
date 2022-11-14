import { createContext, useContext, useState } from "react";

// https://api.surveymonkey.com/v3/surveys/surveyId/details
// https://api.surveymonkey.com/v3/surveys/surveyId/responses/bulk?per_page=100&page=pageNumber

import {
  fetchAllSurveysReq,
  fetchSurveysAllQuestionsReq,
  fetchSurveysAllAnswersReq,
} from "../api/surveys.api";

export const surveysCtx = createContext();

// return the context
export const useSurveys = () => {
  const context = useContext(surveysCtx);
  if (context === undefined) {
    throw new Error("useContext must be used within a TaskContextProvider");
  }
  return context;
};

// context provider
export const SurveysCtxProvider = ({ children }) => {
  const [surveys, setSurveys] = useState({
    surveys: [],
    questions: [],
    answers: [],
  });

  const fetchAllSurveys = async () => {
    const response = await fetchAllSurveysReq();
    // console.log(typeof(response.data))
    // console.log('Hello')
    setSurveys({ ...surveys, surveys: response.data.data });
  };

  const fetchSurveysAllQuestions = async (id) => {
    try {
      const response = await fetchSurveysAllQuestionsReq(id);
      // const questions = response.data.pages[4].questions
      // console.log(...questions)

      const surveyQ = [];
      // const subtypes = []
      const SUBTYPES = [
        "menu",
        "vertical",
        "vertical_col",
        "vertical_two_col",
        "vertical_three_col",
        "multi",
        "horiz",
        "rating",
        "date_only",
      ];

      response.data.pages.forEach((page) => {
        const pageQ = page.questions;
        surveyQ.push(...pageQ);
      });

      // console.log(surveyQ)

      // console.log(surveyQ)
      const surveyQDetails = [];
      surveyQ.map((question) => {
        // console.log(SUBTYPES.find(subtypeItem =>  subtypeItem === question.subtype) ? question.answers : {})
        const qDetails = {
          id: question.id,
          heading: question.headings[0].heading,
          answers: SUBTYPES.find(
            (subtypeItem) => subtypeItem === question.subtype
          )
            ? question.answers
            : {},
        };
        // subtypes.push({subtype: question.subtype})
        // console.log(question)  // subtype: menu, vertical, vertical_col, vertical_two_col, vertical_three_col, multi, horiz, rating, date_only
        surveyQDetails.push(qDetails);
      });

      // console.log(subtypes) //Unique subtypes identified: descriptive_text, single, menu, vertical_two_col, vertical, multi, vertical_three_col, essay, horiz, rating, image
      setSurveys({ ...surveys, questions: surveyQDetails });
      // console.log(surveyQDetails)
      // return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSurveysAllAnswers = async ({ id, page }) => {
    try {      
      const response = await fetchSurveysAllAnswersReq(id, page);

      const responseDetails = [];
      
      response.data.data.forEach((responseItem) => {
        const questionsAndAnswers = []; //array to gather all questions for this reaponse w/o caring about pages
        responseItem.pages.map((page) => {
          //iterate each page (pages array)
          //iterate each page's questions (Array of questions)
          page.questions.map((question) => {
            // console.log(question.id)
            console.log(surveys.questions)
            const x = surveys.questions.find(questionItem => {
              // questionItem.id === question.id
              console.log(questionItem)
              // console.log(questionItem.id, question)
            })
            // console.log(x)
            questionsAndAnswers.push(question)
          });
        });

        // console.log(questionsAndAnswers)
        //getting the response id and its questions and responses as one single object and push to the main reponseDetails array
        responseDetails.push({
          responseId: responseItem.id,
          answers: questionsAndAnswers
          
        });
      });

      // console.log(responseDetails);

      setSurveys({ ...surveys, answers: responseDetails });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <surveysCtx.Provider
      value={{
        surveys,
        fetchAllSurveys,
        fetchSurveysAllQuestions,
        fetchSurveysAllAnswers,
      }}
    >
      {children}
    </surveysCtx.Provider>
  );
};
