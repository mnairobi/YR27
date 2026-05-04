import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-8xl font-heading font-black text-uda-yellow mb-4">404</h1>
        <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn-green">Go Home</Link>
      </div>
    </div>
  )
}