import type { ReactNode } from "react";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export type DetailAccordionProps = {
  title: string;
  content: string | ReactNode;
};

export const DetailAccordion = ({ title, content }: DetailAccordionProps) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleAccordion}
        className="flex items-center gap-2 font-semibold text-lg"
      >
        {title} {open === false ? <FaChevronDown /> : <FaChevronUp />}
      </button>
      {open === true && <div className="mt-2">{content}</div>}
    </>
  );
};
