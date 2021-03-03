import React from 'react';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import AppStack from './src/navigation/Stack';
import {ContainerProvider} from './src/store/index';
import theme from './src/asset/theme.json';

import {FontAwesomeIconsPack} from './src/lib/icon/FontAwesome';
import {IoniconsIconsPack} from './src/lib/icon/Ionicons';
import {SimpleLineIconsPack} from './src/lib/icon/SimpleLineIcons';

export default () => (
  <>
    <ContainerProvider>
      <IconRegistry
        icons={[
          EvaIconsPack,
          FontAwesomeIconsPack,
          IoniconsIconsPack,
          SimpleLineIconsPack,
        ]}
      />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <AppStack />
      </ApplicationProvider>
    </ContainerProvider>
  </>
);
