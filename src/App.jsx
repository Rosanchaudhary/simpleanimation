import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const radius = 150;
  const [nextText, setnextText] = useState(false);

  return (
    <div className="w-screen h-screen bg-[#010313] flex flex-col justify-center items-center">
      <motion.div
        style={{
          width: `${radius}px`,
          height: `${radius}px`,
          borderRadius: "50%",
          border: "10px solid #6c3bf4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "1px 2px 20px #fff",
        }}
        animate={{
          width: radius * 4,
          height: radius * 4,
          boxShadow: "0 0 0 #fff",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {nextText ? (
          <motion.div
            style={{
              width: `${radius * 4}px`,
              height: `${radius * 4}px`,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
            animate={{
              boxShadow: [
                "inset 1px 2px 20px #fff",
                "inset 1px 2px 5px #fff",
                "0 0 0 #fff",
              ],
            }}
          >
            <motion.div
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 4, ease: "easeInOut" }}
              className="flex flex-col justify-center items-center"
            >
              <div className="bg-[#191926] text-white h-6 w-24 flex flex-col justify-center items-center rounded-xl">
                Mind Map
              </div>
              <p className="text-white font-medium text-4xl w-[400px] text-center">
                We simplify your data you master the insight
              </p>
              <div className="flex flex-row justify-between items-center rounded mt-10 w-52">
                <div className="bg-[#191926] text-white h-10 w-24 flex flex-col justify-center items-center rounded">
                  Get Started
                </div>
                <div className="bg-[#191926] text-white h-10 w-24 flex flex-col justify-center items-center rounded">
                  Learn More
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.p
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-white font-bold text-2xl"
            onAnimationComplete={() => setnextText(true)}
          >
            Luxen
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}

export default App;
