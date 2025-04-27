import './globals.css';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Institute Class Schedule</title>
        <meta name="description" content="Find your classes and room locations easily" />
      </head>
      <body>
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Institute Schedule</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Institute Schedule App
          </div>
        </footer>
      </body>
    </html>
  );
}
