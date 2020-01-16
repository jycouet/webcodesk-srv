/*
 *    Copyright 2019 Alex (Oleksandr) Pustovalov
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React from 'react';
import Application from '@webcodesk/react-app-framework';
import schema from './schema';
import userComponents from './indices/userComponents';
import userFunctions from './indices/userFunctions';

let packageJson = {};
if (process.env.NODE_ENV !== 'production') {
  packageJson = require('../../package.json');
}

const App = () => (
  <Application
    name={packageJson.name}
    version={packageJson.version}
    schema={schema}
    userComponents={userComponents}
    userFunctions={userFunctions}
  />
);

export default App;
