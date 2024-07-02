import { fetchData } from './fetch';
import ViewImage from './Image';

export default async function Page() {
  const url = await fetchData();

  return <ViewImage imageUrl={url} />;
}
