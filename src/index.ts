// Copyright 2023 @nu50218
// Copyright 2023 MATSUSHITA Isato
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  API,
} from 'homebridge';

import { Accessory } from './accessory';

/*
 * Initializer function called when the plugin is loaded.
 */
export = (api: API) => {
  api.registerAccessory('homebridge-nature-remo-light-controller-using-signal-id', Accessory);
};
