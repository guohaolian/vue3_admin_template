import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  // 通用配置
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      globals: globals.browser,
      // 如果你希望所有文件都用 ts parser，可以直接放这里
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      // 起名随便，但规则前缀要对应
      '@typescript-eslint': tseslint.plugin,
      vue: pluginVue,
    },
    rules: {
      // ------------ eslint 标准规则 ------------
      'no-var': 'error',
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error',
      'no-useless-escape': 'off',

      // ------------ typescript-eslint 规则 ------------
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/semi': 'off',

      // ------------ vue 规则 ------------
      'vue/multi-word-component-names': 'off',
      //"vue/script-setup-uses-vars": "error",
      'vue/no-mutating-props': 'off',
      'vue/attribute-hyphenation': 'off',
    },
    ignores: ['node_modules', 'dist'],
  },

  // JS 推荐规则
  js.configs.recommended,

  // TS 推荐规则
  ...tseslint.configs.recommended,

  // Vue 推荐规则（flat 模式）
  ...pluginVue.configs['flat/essential'],

  // 专门给 .vue 的额外配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
])
