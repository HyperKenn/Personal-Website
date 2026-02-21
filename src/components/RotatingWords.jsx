import React, { useEffect, useState } from "react";

export default function RotatingWords({
  words = ["Developer", "Engineer", "Student"],
  interval = 2400,
}) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const tick = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((prev) => (prev + 1) % words.length);
        setShow(true);
      }, 200);
    }, interval);

    return () => clearInterval(tick);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-opacity duration-300 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {words[i]}
    </span>
  );
}