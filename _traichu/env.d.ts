/// <reference types="vite/client" />

import {Component, ComputedOptions, MethodOptions} from 'vue';

declare module '*.vue' {
  const content: Component;
  export default content;
}
