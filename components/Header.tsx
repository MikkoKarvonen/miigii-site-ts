import Link from "next/link";
import React from "react";
import { Image } from "../pages/types/HomeTypes";
import styles from "../styles/Header.module.css";

interface HeaderProps {
  images: Image[][];
}

export default function Header({ images }: HeaderProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Miigii</h1>
      <div className={styles.image}>
        {images.map((image) => {
          const year = image[0].filename.replace(".jpg", "");
          return (
            <Link href={`/posts/${year}`} key={image[0].id}>
              <div
                key={image[0].id}
                style={{
                  backgroundImage: `url(${image[0].url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              >
                <p>{year}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
