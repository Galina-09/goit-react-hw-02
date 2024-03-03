import ProtoTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <div className={css.listFeedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

Feedback.protoTypes = {
  good: ProtoTypes.number.isRequired,
  neutral: ProtoTypes.number.isRequired,
  bad: ProtoTypes.number.isRequired,
  total: ProtoTypes.number.isRequired,
  positive: ProtoTypes.number.isRequired,
};

export default Feedback;
