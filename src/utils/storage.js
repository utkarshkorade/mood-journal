


export const saveEntry = (entry) => {
    const existingEntries = JSON.parse(localStorage.getItem("entries")) || [];
    const updatedEntries = [entry, ...existingEntries];
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };
  
  
  export const getEntries = () => {
    return JSON.parse(localStorage.getItem("entries")) || [];
  };
  