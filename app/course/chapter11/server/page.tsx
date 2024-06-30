console.log('server');
import { getData } from '../fetch/req';

export default function Page() {
  console.log('server Page');
  getData().then((data) => {
    console.log('data', data);
  });

  return <button>button</button>;
}
