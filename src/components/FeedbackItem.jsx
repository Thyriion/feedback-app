import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { motion } from "framer-motion";
import FeedbackContext from "../context/FeedbackContext";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      layout
    >
      <Card>
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </motion.div>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
