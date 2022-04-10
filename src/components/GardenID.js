import { useParams } from 'react-router-dom';

export const getGardenID = () => useParams().gardenID || 'Missing Garden ID';
