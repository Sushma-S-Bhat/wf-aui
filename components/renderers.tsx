"use client";

import Image from "next/image";
import Link from "next/link";
import { RenderLink, RenderImage } from "@/devlink";

export const LinkRenderer: RenderLink = ({
  href,
  className,
  children,
  preload,
}) => (
  <Link href={href} className={className} prefetch={preload !== "none"}>
    {children}
  </Link>
);

export const ImageRenderer: RenderImage = ({
  src,
  alt,
  height,
  width,
  loading,
  className,
}) => {
  const imgProps = {
    loading,
    className,
    src: src || "",
    alt: alt || "",
    width: width === "auto" ? undefined : (width as number),
    height: height === "auto" ? undefined : (height as number),

    // Note: this will fill the image to its parent element container
    // so you'll need to style the parent container with the desired size.
    fill: width === "auto" || height === "auto",
  };

  return <Image {...imgProps} />;
};
