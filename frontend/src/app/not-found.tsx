export default async function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white font-montserrat">
      <div className="text-center">
        <h1 className="text-9xl font-bold animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-wide">
          Oops! Page not found
        </h2>
        <p className="mt-2 text-gray-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-200"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
