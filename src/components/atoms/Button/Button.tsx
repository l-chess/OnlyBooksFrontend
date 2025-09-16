import Link from "next/link";
import { useState } from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function evalColor(color: "Lilla" | "Gray" | "White"): string[] {
  switch (color) {
    case "Lilla":
      return [" bg-purple-800 text-white", " hover:bg-purple-900"];
    case "Gray":
      return [" bg-gray-300 text-black", " hover:bg-gray-400"];
    case "White":
      return [" bg-white text-black border-2 border-solid border-gray-400", " hover:bg-gray-400"];
  }
}

function uniqueKey(): string {
  const symbols = "QWERTZUIOPASDFGHJKLYXCVBNMqwertzuiopasdfghjklyxcvbnm1234567890!§$%&";
  let result = "";
  for (let i = 0; i < 5; i++) {
    result = result.concat(symbols[Math.floor(Math.random() * symbols.length)]);
  }
  return result;
}

type optionProps = {
  text: string;
  destination: string;
};

type ButtonProps = {
  text: string;
  type: "Button" | "Label" | "Dropdown";
  color: "Lilla" | "Gray" | "White";
  lang?: boolean;
  dropdownOptions?: optionProps[];
  onClick?: VoidFunction;
};

function Button({ text, type, color, lang, dropdownOptions, onClick }: ButtonProps): any {
  const [dropdownToggle, setDropdownToggle] = useState("hidden");
  function handleMenu() {
    if (dropdownToggle === "block") {
      setDropdownToggle("hidden");
    } else {
      setDropdownToggle("block");
    }
  }
  return (
    <div>
      <button
        type="button"
        onClick={type === "Dropdown" ? () => handleMenu() : onClick}
        className={
          "mx-1 mt-1 inline-flex rounded-full px-3 py-1" +
          (type !== "Label" ? "cursor-pointer" + evalColor(color).join("") : evalColor(color)[0])
        }
      >
        {lang ? <MdOutlineLanguage className="mt-1 w-4 min-w-5 pr-1" /> : <></>}
        {text}
        {type === "Dropdown" ? <RiArrowDropDownLine className="mt-1 w-4 min-w-5 pl-1" /> : <></>}
      </button>
      {type === "Dropdown" && dropdownOptions !== undefined ? (
        <div className={dropdownToggle + evalColor(color)[0] + "max-w-xs"}>
          <ul className="max-w-xs">
            {dropdownOptions.map((option) => (
              <Link
                href={option.destination}
                key={uniqueKey()}
                className="cursor-pointer p-1 hover:underline"
              >
                {option.text}
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Button;
