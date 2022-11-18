import { useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  /*TODO: Animation hinzufügen */
  /*TODO: framer-motion updaten*/
  // return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item) => (
  //         <motion.div
  //           key={item.id}
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           layout
  //         >
  //           <FeedbackItem item={item} />
  //         </motion.div>
  //       ))}
  //     </AnimatePresence>
  //   </div>
  // );

  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem item={item} key={item.id} />;
      })}
    </div>
  );
}

export default FeedbackList;
