export default function SkeletonPost() {
    return (
        <div className="bg-white shadow-lg rounded-md overflow-hidden mb-6 flex flex-col md:flex-row animate-pulse">
            <div className="w-full flex-1 md:w-1/3 bg-gray-200 h-48"></div>
            <div className="p-4 flex-1">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="flex gap-2 mb-4">
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-20 bg-gray-200 rounded w-full"></div>
                <div className="text-right mt-4">
                    <div className="h-8 bg-gray-200 rounded w-24"></div>
                </div>
            </div>
        </div>
    );
}