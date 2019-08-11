# Task_2

### Пишем приложение. Часть 1

1) Написали цикл _for_ для опроса пользователя про его расходы

> for (let i = 0; i < 2; i++) {
> <br> &nbsp;&nbsp;&nbsp;&nbsp; let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b = prompt('Во сколько обойдется?', '');
> <br>
> <br> &nbsp;&nbsp;&nbsp;&nbsp; appData.expenses[a] = b;
> <br> }

### ..[a] = b — ключ : значение

2) Проверка **OK / Cancel** для цикла

> if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; console.log('done');
> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; appData.expenses[a] = b;
> <br> &nbsp;&nbsp;&nbsp;&nbsp; } else {
> <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i--;
> <br> }

3) Добовляем переменную **moneyPerDay**

> appData.moneyPerDay = appData.budget / 30;

4) Уровень достатка пользователя

> if (appData.moneyPerDay < 100) {
> <br> &nbsp;&nbsp;&nbsp;&nbsp; console.log('Низкий уровень достатка');
> <br> } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
> <br> &nbsp;&nbsp;&nbsp;&nbsp; console.log('Средний уровень достатка');
> <br> } else if (appData.moneyPerDay > 2000) {
> <br> &nbsp;&nbsp;&nbsp;&nbsp; console.log('Высокий уровень достатка');
> <br> } else {
> <br> &nbsp;&nbsp;&nbsp;&nbsp; console.log('Произошла Ошибка');
> <br> }

_**Дополнительное задание**_

> #### Переписать наш цикл for еще двумя способами и закомментировать их (еще 2 вида циклов, тренируемся)

Сколько видов циклов существует в JS?
