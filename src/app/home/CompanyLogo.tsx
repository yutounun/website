import { motion } from "framer-motion";

const CompanyLogo = ({ variants, image }: { variants: any; image: string }) => (
  <motion.div variants={variants}>
    <img
      src={image}
      alt={image}
      style={{ width: "130px", height: "80px" }}
    ></img>
  </motion.div>
);

export default CompanyLogo;
