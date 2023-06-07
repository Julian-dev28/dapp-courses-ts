import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

interface CardProps {
  addressHex: string;
}

const getCompletedCourses = (address: string) => {
  // Mock for now.
  return [
    "Crowdfund Dapp: www.Crowdfund-dapp.vercel.com",
    "AMM Dapp: AMM-dapp.vercel.com",
    "Staking Dapp: Staking-dapp.vercel.com",
  ];
};


export function CompletedCoursesCard({ addressHex }: CardProps) {
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);

  // Use an effect to fetch the completed courses when the address changes.
  useEffect(() => {
    if (addressHex) {
      const courses = getCompletedCourses(addressHex);
      setCompletedCourses(courses);
    }
  }, [addressHex]);

  return (
    <div className={styles.card}>
      <h3>Completed Courses:</h3>
      <ul>
        {completedCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}


