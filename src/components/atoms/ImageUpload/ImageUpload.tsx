import { FaPlus } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";

export type ImageUploadProps = {
  variant: "specific" | "additional";
  label?: string;
};

export const ImageUpload = ({ variant, label }: ImageUploadProps) => {
  return (
    <div className="flex aspect-square w-40 flex-col items-center justify-center rounded-2xl bg-gray-300 text-black">
      {variant === "specific" && <LuUpload className="text-2xl" />}{" "}
      {variant === "additional" && <FaPlus className="text-2xl" />}
      <span className="font-medium text-lg">{label}</span>
    </div>
  );
};
