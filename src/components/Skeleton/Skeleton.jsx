import ContentLoader from 'react-content-loader';
import { ContLoader } from './Skeleton.styled';

export default function Skeleton({ screenWidth }) {
  return (
    <ContLoader>
      <ContentLoader
        speed={2}
        width={1800}
        height={600}
        viewBox="0 0 1800 600"
        backgroundColor="#635345"
        foregroundColor="#bababa"
      >
        <rect x="15" y="13" rx="0" ry="0" width="571" height="106" />
        <rect x="16" y="134" rx="0" ry="0" width="571" height="106" />
        <rect x="17" y="257" rx="0" ry="0" width="571" height="106" />
        <rect x="17" y="378" rx="0" ry="0" width="571" height="106" />
        <rect x="18" y="497" rx="0" ry="0" width="571" height="106" />
      </ContentLoader>
    </ContLoader>
  );
}
