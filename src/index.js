import { createRoot } from 'react-dom/client';
import { App } from './app/App';

const $root = document.querySelector('#root');
if ($root) {
  const root = createRoot($root);
  root.render(<App name={'Counter App'} />);
}
