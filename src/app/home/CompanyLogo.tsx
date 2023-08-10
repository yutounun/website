import { motion } from "framer-motion";

const CompanyLogo = ({ variants, image }: { variants: any; image: string }) => (
  <motion.div variants={variants}>
    <img src={image} alt={image} className="h-20 w-32 lg:h-32 kg:w-40"></img>
  </motion.div>
);

export default CompanyLogo;
