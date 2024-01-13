/// <reference types="vite/client" />

import {Component, ComputedOptions, MethodOptions} from 'vue';

declare module '*.vue' {
  const content: Component<any, any, any, ComputedOptions, MethodOptions>;
  export default content;
}
