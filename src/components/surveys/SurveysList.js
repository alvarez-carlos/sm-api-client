import SurveyCard from "../../share/SurveyCard";

const SurveysList = ({ data }) => {
  return <ul className="list">
    {data.map((item) => (      
      <SurveyCard  key={item.id}  title={item.title} description='Description' id={item.id}/> 
    ))}
  </ul>;  
};

export default SurveysList;