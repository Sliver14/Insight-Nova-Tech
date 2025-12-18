export default function LoadingProject() {
  return (
    <div className="min-h-screen bg-white px-6 pt-32 animate-pulse">
      <div className="h-[60vh] rounded-2xl bg-gray-200" />
      <div className="mt-8 space-y-4 max-w-3xl">
        <div className="h-6 w-1/3 bg-gray-200 rounded" />
        <div className="h-10 w-2/3 bg-gray-200 rounded" />
        <div className="h-4 w-full bg-gray-200 rounded" />
      </div>
    </div>
  );
}
