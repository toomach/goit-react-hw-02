import { useState, useEffect } from "react";
import Description from "../Descriptio/Description";
import Feedback from "../Feedback/Feetback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";



function App() {

  const [feedback, setFeedback] = useState(() => {
    const savaFeedback = localStorage.getItem("feedback");
    return savaFeedback ? JSON.parse(savaFeedback) : {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round((feedback.good / total) * 100);
  const updateFeedback = (type) => {
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  };

  const reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} reset={reset} total={total} />
      {total > 0 ? (
        <Feedback feedback={feedback} total={total} positive={positive} />
      ) : (
        <Notification />
      )}
    </div>
  )
}

export default App
