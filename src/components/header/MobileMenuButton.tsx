interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="xmenu-toggler lg:hidden float-right mt-4.5 mb-4 md:ml-7 ml-4 size-11 bg-dark-600 relative cursor-pointer max-lg:order-1"
      type="button"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
    >
      <span
        className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-3.25 w-5.5 ${
          isOpen ? 'rotate-45 top-5.5' : ''
        }`}
      />
      <span
        className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-0 top-5.5 w-6.25 ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block absolute left-2.5 h-0.5 rounded-px bg-white duration-300 top-8 w-4 ${
          isOpen ? '-rotate-45 top-5.5 w-5.5' : ''
        }`}
      />
    </button>
  );
};

export default MobileMenuButton;
