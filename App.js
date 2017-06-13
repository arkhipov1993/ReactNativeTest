import {
    StackNavigator,
} from 'react-navigation';

import graphPage from './graphPage';
import AiroHealth from './AiroHealth';

const App = StackNavigator({
    Next: { screen: graphPage },
    Home: { screen: AiroHealth },
});

