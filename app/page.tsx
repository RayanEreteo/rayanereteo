import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";
import { FaBeer } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page}>
      <FaBeer></FaBeer>
    </div>
  )
}