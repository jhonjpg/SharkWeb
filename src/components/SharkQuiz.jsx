import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import diver from "../../public/assets/sharkPic/diver.png";
import bigShark from "../../public/assets/sharkNotBackground/bigShark.png";

const quiz = [
  {
    question: "What is the largest shark species?",
    options: ["Great White", "Hammerhead", "Whale Shark", "Mako"],
    answer: "Whale Shark",
  },
  {
    question: "How many species of sharks exist?",
    options: ["Over 100", "About 200", "Over 500", "Less than 50"],
    answer: "Over 500",
  },
  {
    question: "Which shark is known for its hammer-shaped head?",
    options: ["Tiger Shark", "Hammerhead", "Bull Shark", "Nurse Shark"],
    answer: "Hammerhead",
  },
  {
    question: "What is the fastest shark species?",
    options: ["Great White", "Mako", "Thresher", "Goblin"],
    answer: "Mako",
  },
 
  {
    question: "What do whale sharks primarily eat?",
    options: ["Seals", "Plankton", "Fish", "Squid"],
    answer: "Plankton",
  },

];

export const SharkQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    const isCorrect = option === quiz[current].answer;
    setCorrect(isCorrect);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const next = () => {
    if (current + 1 >= quiz.length) {
      setFinished(true);
    } else {
      setSelected(null);
      setCorrect(null);
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <main className="flex h-screen bg-black flex-col justify-center items-center bg-black relative overflow-hidden">
      {/* Message to motivate */}
      {!finished && (
        <p className="text-white absolute top-6 text-lg animate-pulse">
          Get all answers right to see a Shark Surprise!
        </p>
      )}

      <AnimatePresence>
        {!finished ? (
          <motion.section
            key="quiz"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-screen p-4 flex flex-col justify-center items-center text-white text-center px-6"
          >
            <h2 className="text-5xl mb-4">Shark Quiz</h2>
            <p className="text-lg mb-2">
              Question {current + 1} of {quiz.length}
            </p>
            <p className="text-2xl mb-6">{quiz[current].question}</p>
            <div className="flex flex-col gap-4 w-full max-w-xl">
              {quiz[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  className={`py-3 px-6 rounded-xl border border-white ${
                    selected
                      ? opt === quiz[current].answer
                        ? "bg-green-600"
                        : "bg-red-500"
                      : "hover:bg-white/10"
                  }`}
                  disabled={!!selected}
                >
                  {opt}
                </button>
              ))}
            </div>
            {selected && (
              <button
                onClick={next}
                className="mt-8 bg-blue-500 px-6 py-3 rounded-xl"
              >
                {current + 1 === quiz.length ? "Finish Quiz" : "Next Question"}
              </button>
            )}
          </motion.section>
        ) : score === quiz.length ? (
          // Success Animation
          <motion.div
            key="bigShark"
            initial={{ scale: 0, opacity: 0, y: 0 }}
            animate={{ scale: 2, opacity: 1, y: 400 }}
            transition={{ duration: 10 }}
            className=" flex flex-col items-center text-white w-screen"
          >
            <img
              src={bigShark}
              alt="Big Shark"
              className="moveShark w-[500px] object-contain"
            />

<h2 className="text-4xl mt-6">You're a Shark Expert! 🦈</h2>

          </motion.div>
        ) : (
          // Failed - no shark
          <motion.div
            key="fail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center"
          >
            <h2 className="text-4xl">Quiz Finished</h2>
            <p className="mt-4 text-lg">You got {score} out of {quiz.length} correct.</p>
            <p className="mt-2">Try again to see the surprise!</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Diver image stays always */}
      <div className="relative w-72 h-full rounded-4xl flex flex-col items-center">
        <div className="diver w-2 h-full absolute"></div>
        <img
          src={diver}
          alt="Diver"
          className="grayscale object-cover contrast-125 w-full h-full object-top"
        />
      </div>
    </main>
  );
};
