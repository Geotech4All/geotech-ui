import React from "react";
import styles from "./loadingStyles.module.scss";

export default function SLoadingHalo (){
  return (
    <div className={`${styles.halo}`}>
      <span className={styles.haloSpan}/>
    </div>
  )
}
