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

import { Logging } from 'homebridge';

export class LoggingMock {
    public static readonly prefix: string = '[MOCK]';

    static init(): Logging {

      const log = function (message: string, ...parameters: unknown[]): void {
        console.log(`[INFO] [MOCK] ${message}`, parameters);
      };

      log.prefix = this.prefix;

      log.info = (message: string, ...parameters: unknown[]): void => {
        console.log(`[INFO] ${this.prefix} ${message}`, parameters);
      };

      log.warn = (message: string, ...parameters: unknown[]): void => {
        console.log(`[INFO] ${this.prefix} ${message}`, parameters);
      };

      log.error = (message: string, ...parameters: unknown[]): void => {
        console.log(`[INFO] ${this.prefix} ${message}`, parameters);
      };

      log.debug = (message: string, ...parameters: unknown[]): void => {
        console.log(`[INFO] ${this.prefix} ${message}`, parameters);
      };

      log.log = (level: string, message: string, ...parameters: unknown[]): void => {
        console.log(`[${level}] ${this.prefix} ${message}`, parameters);
      };

      return log;

    }
}