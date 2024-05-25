import {useEffect} from 'react';
import {observer} from 'mobx-react';

import {useStore} from '../Store';
import {OmedaAPI} from '../services/OmedaAPI';
import {ItemPreview} from './ItemPreview';

export const ItemsList = observer(() => {
    const store = useStore();

    useEffect(() => {
        OmedaAPI.loadItems().then(items => {
            store.items = items;
        });
    }, []);

    if (!store.items) {
        return null;
    }

    return (
        <div>
            {store.items.map(item => (
                <ItemPreview key={item.id} item={item}/>
            ))}
        </div>
    )
});
