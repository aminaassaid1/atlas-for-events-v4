/**
 * PageLayout component - Standard page wrapper with Header and Footer
 * Provides consistent layout structure across all pages
 * @module components/layout/PageLayout
 */
import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Props for PageLayout component
 */
interface PageLayoutProps {
  /** Page content */
  children: ReactNode;
  /** Optional additional CSS classes */
  className?: string;
}

/**
 * Standard page layout with Header and Footer
 * @param props - Component props
 * @returns Page layout with header, content, and footer
 * @example
 * <PageLayout>
 *   <main>Your page content here</main>
 * </PageLayout>
 */
const PageLayout = ({ children, className = "" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen bg-background overflow-hidden ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
