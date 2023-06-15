import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

interface CardProps {
  addressHex: string;
}

interface Course {
  publickey: string;
  url: string;
}

const fetchCourses = async (address: string): Promise<string[]> => {
  try {
    const response = await fetch(
      "https://dapp-wrangler.julian-martinez.workers.dev/"
    ); // replace with your
    const data: Course[] = await response.json();

    return data
      .filter((course) => course.publickey === address)
      .map((course) => course.url);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export function DeployedProjectsCard({ addressHex }: CardProps) {
  const [completedCourses, setCompletedCourses] = useState<string[]>([]);

  useEffect(() => {
    if (addressHex) {
      fetchCourses(addressHex).then((courses) => setCompletedCourses(courses));
    }
  }, [addressHex]);

  return (
    <div className={styles.card}>
      <h3>Dapp Deployments</h3>
      <ul>
        {completedCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
