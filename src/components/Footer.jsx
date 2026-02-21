export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/30 py-2">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Hari Sai Matta. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Built with React, Tailwind CSS, and EmailJS.
        </p>
      </div>
    </footer>
  );
};