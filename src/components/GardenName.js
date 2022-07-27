import { useSearchParams } from 'react-router-dom';

export const getGardenName = () => {
  const [searchParams] = useSearchParams();
  return searchParams.get('name') || 'Missing Garden Name';
};
