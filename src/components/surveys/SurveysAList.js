import SurveyQCard from "../../share/SurveyQCard";

const SurveysAList = ({ data }) => {
  return <ul className="list">
    {data.map((item) => (      
      <SurveyQCard  key={item.responseId}  title={`Response Id: ${item.responseId}`} description='Description' id={item.responseId}/>       
    ))}
  </ul>;  
};

export default SurveysAList;