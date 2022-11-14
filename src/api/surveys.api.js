import axios from "axios";

export const fetchAllSurveysReq = async () => {
  return await axios.get(`${process.env.REACT_APP_BASELINK}/surveys`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer {${process.env.REACT_APP_TOKEN}}`,
    },
  });
};

export const fetchSurveysAllQuestionsReq = async (id) =>
  await axios.get(`${process.env.REACT_APP_BASELINK}/surveys/${id}/details`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer {${process.env.REACT_APP_TOKEN}}`,
    },
  });

  
export const fetchSurveysAllAnswersReq = async (id, page) =>
await axios.get(`${process.env.REACT_APP_BASELINK}/surveys/${id}/responses/bulk?per_page=30&page=${page}`, {
  headers: {
    Accept: "application/json",
    Authorization: `Bearer {${process.env.REACT_APP_TOKEN}}`,
  },
});