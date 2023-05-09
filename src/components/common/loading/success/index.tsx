import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function LoadingSuccess(){
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={Math.random()}
            className={`
                rounded-md absolute inset-0 flex
                items-center justify-center bg-black/50`}>
            <svg className={`${styles.checkmark}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className={`${styles.checkmark__circle} bg-sky-400`} cx="26" cy="26" r="25" fill="none" />
                <path className={`${styles.checkmark__check}`} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
        </motion.div>
    )
}

