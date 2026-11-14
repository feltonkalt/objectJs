const expenses = [
    {title: 'Обед', category: 'Еда', amount: 350},
    {title: 'Автобус', category: 'Транспорт', amount: 45},
    {title: 'Хлеб', category: 'Еда', amount: 80},
]
let totalPrice = 0;
const UserChoise = prompt()

expenses.forEach(element => {
    if(element.category == UserChoise){
        totalPrice += element.amount;
        
    }
    else{
        alert('Такой категории нет')
    }
});
alert(`Категория:${UserChoise} Сумма:${totalPrice}`)