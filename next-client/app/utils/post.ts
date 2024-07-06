import { logbook } from "@/constants/seed";

// Utility function to get a random log entry
export const getRandomLogEntry = () => {
    const randomIndex = Math.floor(Math.random() * logbook.length);
    return logbook[randomIndex];
  };