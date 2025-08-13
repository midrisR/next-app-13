import Image from "next/image";

/**
 * ratio bisa "1/1", "16/9", "4/3", dst.
 * default "1/1"
 */
export default function ProductImage({
  src,
  alt,
  ratio = "1/1",
  sizes,
  priority = false,
  className = "",
}) {
  // parse "16/9" -> "16 / 9" untuk CSS aspect-ratio
  const cssRatio = ratio.includes(":") ? ratio.replace(":", " / ") : ratio;

  // fallback sizes sesuai rasio umum
  const defaultSizes =
    ratio === "16/9"
      ? "(max-width:640px) 90vw, (max-width:1024px) 80vw, 1280px"
      : "(max-width:640px) 90vw, (max-width:1024px) 50vw, 800px";

  return (
    <div
      className={`relative w-full ${className}`}
      style={{ aspectRatio: cssRatio }} // <-- inilah tinggi parent-nya
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? defaultSizes}
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
