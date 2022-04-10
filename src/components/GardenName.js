import { useParams } from 'react-router-dom';

export const getGardenName = () => useParams().gardenName || 'Missing Garden ID';
