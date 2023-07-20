"use client";

import { FC, useState } from "react";
import placholder from "@/assets/image-placeholder.png";
import Image from "next/image";

interface FileUploadProps {
  onChange?: (img: string) => void;
}

const FileUpload: FC<FileUploadProps> = ({ onChange }) => {
  const [imgPreview, setImgPreview] = useState("");

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-1 justify-center rounded-lg border border-dashed border-darkGray p-5">
        <div className="text-center">
          <Image src={placholder} alt="" className="h-10 w-10 mx-auto" />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor="file-upload"
              className="cursor-pointer rounded-md bg-white font-semibold text-primary outline-none"
            >
              <span>Upload a Product Image</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e: any) => {
                  onChange && onChange(e.target.files[0]);
                  if (e.target.files.length) {
                    const url = URL.createObjectURL(e.target.files[0]);
                    setImgPreview(url);
                  }
                }}
                className="sr-only "
              />
            </label>
          </div>
          <p className="text-xs leading-5 text-gray-600">PNG, JPG, JPEG up to 10MB</p>
        </div>
      </div>

      {imgPreview && <Image src={imgPreview} alt="" height={200} width={200} />}
    </div>
  );
};

export default FileUpload;
