---
title: Віртуальні пристрої

contributors: [nakata5321]
---

**Ця стаття розповість вам, як створити віртуальні пристрої в розумному будинку, щоб ви могли побачити, як виглядає фактична платформа.**

{% roboWikiPicture {src:"docs/home-assistant/virtual-sensors.png", alt:"віртуальний сенсор"} %}{% endroboWikiPicture %}

## Встановлення інтеграції

Для використання віртуальних пристроїв вам потрібно встановити ["демо" інтеграцію](https://www.home-assistant.io/integrations/demo/).
Для цього вам слід відредагувати файл конфігурації.

Перейдіть до папки конфігурації, яку ви вказали під час процесу налаштування. У цій папці ви знайдете папку з назвою "homeassistant". Увійдіть в неї. Відкрийте файл `configuration.yaml` за допомогою текстового редактора під **користувачем root** і вставте в нього наступний рядок:

{% codeHelper { copy: true}%}

```
...
# Приклад запису у configuration.yaml
demo:
...
```

{% endcodeHelper %}


Після цього перезапустіть Home Assistant через веб-інтерфейс. Коли розумний будинок перезапуститься, ви зможете знайти всі віртуальні пристрої в сутностях "демо".
Знайдіть їх у `Налаштування -> Пристрої та сервіси -> Демо`. Усі ці сутності можна додати до вашої панелі керування.

{% roboWikiPicture {src:"docs/home-assistant/demo-entities.png", alt:"сутності-демо"} %}{% endroboWikiPicture %}