# Приложение для выставления счёта

Рабочий вариант можно посмотреть [тут](https://pip.pypa.io/en/stable/)

## Запустить проект
```python
# Установить зависимости
npm install

# Запустить приложение
npm start
```

### Технологии
📎 [ReactJs](https://reactjs.org/)  
📎 [TypeScript](https://www.typescriptlang.org/)  
📎 [Final-form](https://final-form.org/) / [React-final-form](https://final-form.org/react)  
📎 [Final-form-arrays](https://final-form.org/arrays)  
📎 [React-select](https://react-select.com/home)  
📎 [DayJs](https://day.js.org/)

### Специфика
🖇️ Блоки "Позиции", "Дополнительно" имеют валидацию полей  
🖇️ Использованы регулярные выражения для input и условный рендеринг   
🖇️ Тултипы и доп.меню в блоке "Позиции" написаны при помощи порталов  
🖇️ Реализован адаптив для планшетов и смартфонов. При разрешении менее 599 px создание "Позиции" открывается в модальном окне

### Результат
После заполнения формы и нажатия на кнопку "Проверить и выставить" формируется json-объект с введёнными данными. Например: 

```python
# Данные для выставления счёта
{
  "choiceAccount": "50 275,37 ₽ — Расчётный",
  "positions": [
    {
      "title": "Организация детского праздника",
      "count": 1,
      "what": "шт.",
      "price": "40000",
      "nds": "Без НДС",
      "total": "40000"
    },
    {
      "title": "Костюм Боба Фетта",
      "what": "компл.",
      "price": "15500",
      "nds": "Без НДС",
      "count": "1",
      "total": "15500"
    }
  ],
  "additional": {
    "base": "Договор №12 от 09.08.2022",
    "name": "Непомнящий Кирилл Андреевич",
    "priceNumber": "2",
    "dataOfCreation": "09.08.2022",
    "deadLine": "10.09.2022"
  },
  "withApproved": false,
  "partnerName": "0123456789"
}
```
