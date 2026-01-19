import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  children?: ReactNode;
  className?: string;
}

const alignClasses = {
  left: "text-left",
  center: "text-center mx-auto",
  right: "text-right ml-auto"
};

const SectionHeader = ({
  badge,
  title,
  subtitle,
  align = "center",
  children,
  className = ""
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-3xl mb-12 ${alignClasses[align]} ${className}`}
    >
      {badge && (
        <span className="text-sm uppercase tracking-wider text-primary font-medium mb-2 block">
          {badge}
        </span>
      )}
      
      <h2 className="font-title text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
      
      {children}
    </motion.div>
  );
};

export default SectionHeader;
