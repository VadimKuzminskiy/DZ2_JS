let userNum = +prompt('Введите числа через затятую')
.split(',')
.map(Number);

alert(userNum
    .reduce((sum, next) => sum + next, 0)
    / userNum.lenght);
   