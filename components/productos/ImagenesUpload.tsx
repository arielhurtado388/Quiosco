"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

export default function ImagenesUpload() {
  const [imagenUrl, setImagenUrl] = useState("");

  return (
    <CldUploadWidget
      onSuccess={(resultado, { widget }) => {
        if (resultado.event == "success") {
          widget.close();
          // @ts-ignore
          setImagenUrl(resultado.info.secure_url);
        }
      }}
      uploadPreset="Quiosco"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <>
          <div className="space-y-2 ">
            <label className="text-slate-800 ">Imagen</label>

            <div
              className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
              onClick={() => open()}
            >
              <TbPhotoPlus size={50} />
              <p className="text-lg font-semibold">Agregar imagen</p>

              {imagenUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    style={{
                      objectFit: "contain",
                    }}
                    src={imagenUrl}
                    alt="Imagen de producto"
                  />
                </div>
              )}
            </div>
          </div>

          <input type="hidden" name="imagen" value={imagenUrl} />
        </>
      )}
    </CldUploadWidget>
  );
}
