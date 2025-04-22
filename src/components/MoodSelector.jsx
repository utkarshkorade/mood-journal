import React from "react";
import { motion, AnimatePresence } from 'framer-motion';


const moods = [
  { emoji: "😄", label: "Happy", color: "bg-yellow-300" },
  { emoji: "😐", label: "Neutral", color: "bg-gray-300" },
  { emoji: "😞", label: "Sad", color: "bg-blue-300" },
  { emoji: "😠", label: "Angry", color: "bg-red-300" },
  { emoji: "😍", label: "Love", color: "bg-pink-300" },
];

export default function MoodSelector({ selectedMood, onMoodSelect }) {
  return (
    <div className="flex justify-around flex-wrap gap-4 mt-2">
      {moods.map((mood) => (
        <motion.button
          key={mood.label}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => onMoodSelect(mood)}
          className={`text-4xl p-4 rounded-full shadow transition duration-300 ${
            selectedMood?.label === mood.label
              ? `${mood.color} ring-4 ring-black`
              : "bg-white"
          }`}
          title={mood.label}
        >
          {mood.emoji}
        </motion.button>
      ))}
    </div>
  );
}
