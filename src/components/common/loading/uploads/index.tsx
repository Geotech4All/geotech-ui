import React from "react";
import styles from "./styles.module.scss";
import { AiFillCloud } from "react-icons/ai";
import { motion } from "framer-motion";


export default function UploadLoadingAnimation(){
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={Math.random()}
            className="bg-black/60 rounded-lg absolute inset-0 flex items-center justify-center">
            <div className="relative text-white">
                <span className="absolute right-1/2 translate-x-[50%] top-1/2 -translate-y-[50%]"><AiFillCloud size={110} /></span>
                <span className={`${styles.loader} `}>
                    <AiFillCloud size={100}/>
                </span>
            </div>
        </motion.div>
    )
};

