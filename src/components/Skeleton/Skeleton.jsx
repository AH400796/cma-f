import ContentLoader from 'react-content-loader';

export default function Skeleton(props) {
  return (
    <ContentLoader
      speed={4}
      interval={0.5}
      width={800}
      height={600}
      viewBox="0 0 500 600"
      backgroundColor="#635345"
      foregroundColor="#bababa"
      {...props}
    >
      <rect x="15" y="20" rx="15" ry="15" width="95%" height="40" />
      <rect x="150" y="100" rx="10" ry="10" width="65%" height="20" />
      <rect x="150" y="140" rx="10" ry="10" width="65%" height="20" />
      <rect x="150" y="180" rx="10" ry="10" width="65%" height="20" />
      <circle cx="60" cy="150" r="40" />
      <rect x="15" y="230" rx="15" ry="15" width="95%" height="40" />
    </ContentLoader>
  );
}
