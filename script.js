'use strict';

const date = new Date();

function getInTime() {
   const div = document.createElement('div'),
      dataHours = date.getHours(),
      dataDay = date.getDay();
   console.log(dataDay);

   function one() {
      let greeting;
      switch (true) {
         case dataHours >= 0 && dataHours < 6:
            greeting = 'Доброй ночи';
            break;
         case dataHours >= 6 && dataHours < 12:
            greeting = 'Доброе утро';
            break;
         case dataHours >= 12 && dataHours < 18:
            greeting = 'Добрый день';
            break;
         case dataHours >= 18 && dataHours < 24:
            greeting = 'Добрый вечер';
            break;
      }
      return greeting;
   }

   function getWeekDay() {
      const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
      return days[date.getDay()];
   }

   function time() {
      const dateStop = new Date('1 jan 2021').getTime(),
         timeRemaining = (dateStop - date) / 1000,
         day = Math.floor(timeRemaining / 60 / 60 / 24);
      console.log(day);
      return day;
   }

   document.body.append(div);
   div.innerHTML = `<div>${one()}</div>
  <div>Сегодня: ${getWeekDay()}</div>
  <div>Текущее время: ${date.toLocaleTimeString('en')}</div>
  <div>До нового года осталось: ${time()} дней</div>`;
}
getInTime();