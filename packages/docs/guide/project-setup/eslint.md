# Eslint Setup

It's strongly recommened to use Eslint and with it, `eslint-plugin-vue`.

If you do, you should enforce the following rules manually, as they are not included in this configuration together in any of the available presets:

```js
// .eslintrc.js
{
  extends: ['vue3/recommended'],
  rules: {
    'vue-no-multiple-template-root': 'error',
    'vue-require-explicit-emits': 'error',
    'vue/no-v-model-argument': 'error',
    'vue/no-deprecated-v-bind-sync': 'error',
    'vue/no-deprecated-v-on-native-modifier': 'error',
    'vue/no-use-v-if-with-v-for': 'error',
    'vue/no-deprecated-dollar-listeners-api': 'error,
    "no-restricted-imports": ["error", {
      "paths": [{
        "name": "vue",
        "importNames": ["defineAsyncComponent"],
        "message": "Please use defineAsyncComponent from 'vue3-compat-lib' instead."
      }]
    }],
    // recommended in combination with attrsListenersMixin
    'no-restricted-properties': [
      'error',
      {
        property: '$attrs',
        message: 'Please use $_attrs instead',
      },
      {
        property: '$listeners',
        message: 'Please use $_listeners instead',
      },
    ],
  }
}
```

These rules cover a bunch of the incompatibilities that can't be worked around and will ensure you don't accidentally use them.
