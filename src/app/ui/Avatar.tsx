import Image from "next/image";
import styles from "./Avatar.module.scss";

export type AvatarProps = {
  src: string | undefined,
  alt: string,
  circle: boolean,
  size: number,
};

export default function Avatar({
  src,
  alt = "Avatar",
  circle = false,
  size = 6,
}: AvatarProps) {
  let classes = `${styles.avatar} ${circle ? styles.circle : ""}`;


  if (src) {
    return (
      <Image src={src} alt={alt} className={classes} width={16 * size} height={16 * size} />
    );
  } else {
    return (
      <svg
        className={classes}
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="1.5"
        clip-rule="evenodd"
        viewBox="0 0 104 104"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h103.4v103.4H0z" />
        <path
          fill="none"
          stroke="#9a9a9a"
          stroke-width="5"
          d="M51.7 92.5V51.7L16.4 31.3l35.3 20.4L87 31.3 51.7 11 16.4 31.3v40.8l35.3 20.4L87 72V31.3L51.7 11"
        />
      </svg>
    );
  }
}
