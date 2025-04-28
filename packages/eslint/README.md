# Использование eslint

[На главную](../../README.md)

## Установка

```shell
yarn add -D @voendev/eslint
```

## Настройка

В корне проекта создайте файл `eslint.config.js` со следующим содержимым:

### Для проектов на JavaScript

```js
import { eslint } from "@voendev/eslint";

export default eslint({
  javascript: true
});
```

### Для проектов на TypeScript

```js
import { eslint } from "@voendev/eslint";

export default eslint({
  typescript: true
});
```

### Для проектов на React

```js
import { eslint } from "@voendev/eslint";

export default eslint({
  react: true
});
```

Посмотреть список доступных правил можно с помощью команды

```bash
yarn lint-inspector
```
