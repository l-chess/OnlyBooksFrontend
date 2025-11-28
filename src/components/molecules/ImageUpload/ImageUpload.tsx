import { useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { LuUpload } from "react-icons/lu";

export type ImageUploadProps = {
  variant: "specific" | "additional";
  label?: string;
  onFilesSelect?: (files: File[]) => void;
};

const resizeImage = (file: File, maxWidth = 800, maxHeight = 800): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        // Seitenverhältnis beibehalten
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) return reject("Canvas nicht verfügbar");

        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) return reject("Fehler beim Erstellen des Blob");
            resolve(new File([blob], file.name, { type: file.type }));
          },
          file.type,
          0.9 // Qualität (bei JPEG)
        );
      };

      img.onerror = (err) => reject(err);
    };
  });
};

export const ImageUpload = ({ variant, label, onFilesSelect }: ImageUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click(); // Öffnet den Dateiexplorer
  };

  const handleFilesSelect = async (files: FileList | null) => {
    if (!files) return;

    const resizedFiles: File[] = [];
    for (const file of Array.from(files)) {
      const resized = await resizeImage(file, 400, 400);
      resizedFiles.push(resized);
    }

    onFilesSelect?.(resizedFiles);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleClick}
        className="relative flex aspect-square w-40 flex-col items-center justify-center rounded-2xl bg-gray-300 text-black"
      >
        {variant === "specific" && <LuUpload className="text-2xl" />}
        {variant === "additional" && <FaPlus className="text-2xl" />}
        <span className="font-medium text-lg">{label}</span>
      </button>

      <input
        ref={fileInputRef}
        type="file"
        multiple={variant === "additional"} // nur bei "additional" mehrere Dateien
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFilesSelect(e.target.files)}
      />
    </div>
  );
};
