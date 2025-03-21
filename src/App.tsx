import {
    Admin,
    Resource,
} from 'react-admin';

import { SkipsList } from './resources/skipsList';
import { Layout } from './Layout';
import { dataProvider } from './dataProvider';
import './index.scss'

export const App = () => (
    <Admin dataProvider={dataProvider} disableTelemetry layout={Layout}>
        <Resource
            name='skips'
            list={SkipsList}
        />
    </Admin>
);
