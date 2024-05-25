import {createContext, PropsWithChildren, useContext} from 'react';
import {makeAutoObservable} from 'mobx';

import {Item} from './types';

export class Store {
    items?: Item[];

    constructor() {
        makeAutoObservable(this);
    }
}

const StoreContext = createContext<Store>({} as Store);

export const createStoreContextProvider = (externalStore?: Store) => {
    const store = externalStore ?? new Store();
    const StoreContextProvider = ({children}: PropsWithChildren) => (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
    return StoreContextProvider;
};

export const useStore = () => useContext(StoreContext);
