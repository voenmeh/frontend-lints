# Core

Данный монорепозиторий является сборником пакетов для сообщества voendev

[Документация eslint](./packages/eslint/README.md) • [Документация stylelint](./packages/stylelint/README.md)

### Восстановление зависимостей

```shell
npm i
```

### Обновление пакетов

- Создайте `Pull Request`, ожидайте добавления изменений в main.
- Далее заходим в раздел _Deploy_ -> _Releases_. Нажимаем кнопку _New release_
- Создаём новый тег для релиза. Тег нужен для опеределния [типа и версии](#типы-пакетов) пакета.
- Далее указываем Заголовок и содержание релиза
- Нажимаем кнопку "Create release"

##### Типы пакетов

1. **eslint** (@voendev/eslint). Пример тега: **_v1.1.1-eslint_**
2. **stylelint** (@voendev/stylelint). Пример тега: **_v1.1.1-stylelint_**
3. **prettier** (@voendev/prettier). Пример тега: **_v1.1.1-prettier_**
