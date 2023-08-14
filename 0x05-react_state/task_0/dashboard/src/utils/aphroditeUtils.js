// src/utils/aphroditeUtils.js
const isBrowser = typeof document !== 'undefined';

let aphrodite;

if (isBrowser) {
  // Only import aphrodite in a browser environment
  aphrodite = require('aphrodite');
} else {
  // Provide a fallback for a non-browser environment
  aphrodite = {
    StyleSheet: {
      create: () => ({}),
    },
    css: () => '',
  };
}

export default aphrodite;
