import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
//import useCompletedCourses from '../hooks/useCompletedCourses';

interface CardProps {
  addressHex: string;
}

const getCompletedCourses = (address: string) => {
  // Todo:Replace this with method of getting completed courses.
  // Mock for now.
  return [
    "Crowdfund Dapp: www.Crowdfund-dapp.vercel.com",
    "AMM Dapp: AMM-dapp.vercel.com",
    "Staking Dapp: Staking-dapp.vercel.com",
  ];
};

export function Card({ addressHex }: CardProps) {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);
  // const { loading, error, completedCourses } = useCompletedCourses(addressHex);

  //   const toggleCardExpand = () => {
  //     setIsCardExpanded(!isCardExpanded);
  //   };

  // Use an effect to fetch the completed courses when the address changes.
  useEffect(() => {
    if (addressHex) {
      const courses = getCompletedCourses(addressHex);
      setCompletedCourses(courses);
    }
  }, [addressHex]);

  return (
    <div className={styles.card}>
      <h3>User Profile</h3>
      {
        <>
          <p>{addressHex}</p>
          <h4>Completed Courses:</h4>
          <ul>
            {completedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </>
      }
    </div>
  );
}
