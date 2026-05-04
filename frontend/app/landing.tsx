export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-uda-yellow border-t-uda-green rounded-full animate-spin mx-auto mb-4" />
        <p className="font-heading font-bold text-uda-green">Loading YR27...</p>
      </div>
    </div>
  )
}