"use client";

import { useEffect, useState } from "react";

export default function TypedRoles({ roles }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === roles[index].length + 1 && !deleting) {
      const pause = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(pause);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 35 : 90
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, roles]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => setBlink((b) => !b), 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <span className="text-accent">
      {roles[index].substring(0, subIndex)}
      <span className={blink ? "opacity-100" : "opacity-0"}>|</span>
    </span>
  );
}
