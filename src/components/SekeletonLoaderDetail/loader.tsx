export default function SkeletonDetail({ className }: { className?: string }) {
    return (
        <div className={`animate-pulse bg-gray-300 rounded ${className}`} />
    );
};
