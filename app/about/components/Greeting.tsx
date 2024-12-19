'use client';

import { useEffect, useState } from 'react';

export default function Greeting() {
  const [greeting, setGreeting] = useState("Hi there");

  useEffect(() => {
    const currentHour = new Date().getHours();
    const newGreeting =
      currentHour >= 5 && currentHour < 12
        ? "Bien le bonjour,"
        : currentHour >= 12 && currentHour < 17
        ? "Bien le bonsoir,"
        : currentHour >= 17 && currentHour < 23
        ? "Et cette nuit !,"
        : "Il fait nuit hein, bonne nuit";
    
    setGreeting(newGreeting);
  }, []);

  return <span>{greeting}</span>;
} 