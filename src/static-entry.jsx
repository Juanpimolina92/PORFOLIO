import { createRoot } from 'react-dom/client';
import { InteractiveEffects } from './interactive-effects.jsx';

const mount = document.createElement('div');
mount.id = 'portfolio-effects';
document.body.append(mount);
createRoot(mount).render(<InteractiveEffects />);
