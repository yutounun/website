import Image from "next/image";
import { motion } from "framer-motion";

const CompanyLogo = ({ variants, image }: { variants: any; image: string }) => (
  <motion.div variants={variants}>
    <Image src={image} alt={image} width="130" height="80"></Image>
  </motion.div>
);

export default CompanyLogo;
