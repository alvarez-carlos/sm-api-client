import SurveyQCard from "../../share/SurveyQCard";

const SurveysQList = ({ data }) => {
  return <ul className="list">
    {data.map((item) => (      
      <SurveyQCard  key={item.id}  title={item.heading} description='Description' id={item.id}/>       
    ))}
  </ul>;  
};

export default SurveysQList;