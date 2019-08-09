let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '2019-06-08');
    
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let q_1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    q_2 = prompt('Во сколько обойдется?', ''),
    q_3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    q_4 = prompt('Во сколько обойдется?', '');

appData.expenses.q_1 = q_2;
appData.expenses.q_3 = q_4;


alert(appData.budget / 30);