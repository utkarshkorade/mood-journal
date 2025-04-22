import React from "react";


const moodColors = {
  Happy: "#ffeb3b", 
  Love: "#f50057",  
  Neutral: "#9e9e9e", 
  Sad: "#2196f3",  
  Angry: "#d32f2f",  
};

const MoodChart = ({ moodData }) => {
  return (
    <div>
      <h2>Mood Chart</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {moodData.map((entry, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
           
            <span
              style={{
                display: "inline-block",
                width: "20px",
                height: "20px",
                backgroundColor: moodColors[entry.mood] || "#000", 
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
           
            <div>
              <strong>{entry.mood}</strong>: {entry.count} entries
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodChart;
