import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';

import { themes } from './themes';
import { routes } from './routes';
import { store } from './store';

import './index.css';

export const App = () => (
    <Provider store={store}>
        <ConfigProvider theme={themes}>
            <RouterProvider router={routes} />
        </ConfigProvider>
    </Provider>
);
