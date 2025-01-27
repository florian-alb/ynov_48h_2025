export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <p className="text-sm text-gray-500">
          © {currentYear} StreamLine. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
