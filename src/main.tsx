import {createRoot} from 'react-dom/client';

import {App} from './App';
import {createStoreContextProvider, Store} from './Store';
import './index.css';

const store = new Store();
const StoreContextProvider = createStoreContextProvider(store);

const root = createRoot(document.getElementById('root')!);
root.render(
    <StoreContextProvider>
        <App/>
    </StoreContextProvider>
);
