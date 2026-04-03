import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold text-gray-800">Page not found</h1>
      <Link to="/" className="text-blue-600 underline hover:text-blue-800">
        Back to home
      </Link>
    </div>
  )
}
