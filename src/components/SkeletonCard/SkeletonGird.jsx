import "./SkeletonGird.css";

function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div className="skeleton-flag shimmer" />
      <div className="skeleton-body">
        <div className="skeleton-line wide shimmer" />
        <div className="skeleton-line shimmer" />
        <div className="skeleton-line shimmer" />
      </div>
    </div>
  );
}

export default function SkeletonGird() {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 12 }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
