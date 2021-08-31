/*Объявите две переменные: admin и name.
Запишите строку "Джон" в переменную name.
Скопируйте значение из переменной name в admin.
Выведите на экран значение admin, используя функцию alert (должна показать «Джон»).*/

/* let name = "Джон"; 
let admin = name;
alert( admin );  */

/*Придумайте правильные имена
важность: 3
Создайте переменную для названия нашей планеты. Как бы вы её назвали?
Создайте переменную для хранения имени текущего посетителя сайта. Как бы вы назвали такую переменную?*/

/* let EarthPlanet = "Земля";
let CurrentUserName = "Андрей"; */

//Создайте страницу, которая спрашивает имя у пользователя и выводит его.

/* let UserName = prompt("Как Ваше имя?", "");
alert(UserName); */


//Чему будут равны переменные a, b, c и d в примере ниже?

/* let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1 */


//Чему будут равны переменные a и x после исполнения кода в примере ниже?

/* let a = 2;

let x = 1 + (a *= 2); // 5 */



//Какой результат будет у выражений ниже?

/* "" + 1 + 0 //  "10", все элементы преобразовались в строку и произошло сложение строк 
"" - 1 + 0 // -1 пустая строка приводится к 0
true + false // 1
6 / "3" // 2
"2" * "3" //6
4 + 5 + "px" // "9px"
"$" + 4 + 5 // "$45"
"4" - 2 // 2
"4px" - 2 // NAN
7 / 0 // Infinity
"  -9  " + 5 // " -9 5"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NAN
" \t \n" - 2 // -2  строка " \t \n", аналогично пустой строке, становится 0 после численного преобразования.
 */

/* Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.

Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).

В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(a + b); // 12 */

/* let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12 */


//Каким будет результат этих выражений?

/* 5 > 4  // true
"ананас" > "яблоко" // false a меньше чем я
"2" > "12" // true посимвольное сравнение, 2 больше чем 1
undefined == null //true null и undefined равны только друг другу при нестрогом сравнении.
undefined === null // false
null == "\n0\n" // false  null равен только undefined
null === +"\n0\n" //false строгое сравнение разных типов */


/* Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

/* let officialName = prompt("Какое официальное название JavaScript?");

if (officialName == "ECMAScript") {
    alert("Верно!") 
} else {
    alert("Не знаете? ECMAScript!")
} */


/* Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа. */


/* let enteredNumber = prompt("Введите какое-то число");

if (enteredNumber > 0) {
    alert(1)
}
else if (enteredNumber < 0) {
 alert(-1)
}
else {
    alert(0)
}


Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
} */

/* let message = (login == 'Сотрудник') ? "Привет": 
    (login == 'Директор') ? "Здравствуйте": (login == '') ? "Нет логина": "";

 */

 /*    let login = prompt("Введите ваш логин");

    if (login === "Админ") {
        let pass = prompt("Введите пароль");

        if (pass== "Я главный") {
            alert("Здравствуйте!");
        }
        else if (pass== '' || pass==null) {
            alert ("Отменено");
        }
        else {
            alert ("Неверный пароль");
        }
    }
    else if (login == '' || login == null){
        alert("Отменено");
    }

    else {
        alert("Я вас не знаю");
    };

    let myName = "Tina"
    let surname = "Tezadova"
    let message2 = "Привет " + myName + " " + surname;
    let message3 = `Привет ${myName} ${surname}`;


/*     let i = 0;
    while(i < 10){
        alert(i)
    }

    for(let i = 0; i < 10; i++){
        alert(i)
    } */

/*     for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            alert(i)
        }
    } */

   // ---

 /*    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
      }

      let i = 0;
      while (i < 3) {
        alert( `number ${i}!` );
        i++
      } */

/* let UserNamber

do {
    UserNamber = prompt("Введите число больше 100", 0);
}
while (UserNamber <= 100 && UserNamber);
     */

/*  let n = 10;

NextNumber:
for (let i = 2; i<=n; i++) {
    for (let j = 2; j< i; j++) {
        if (i % j == 0) continue NextNumber;
    }
    alert (i);
}
  */

/* Напишите if..else, соответствующий следующему switch:

switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
} */

/* let browser;

if (browser == 'Edge') {
    alert("You've got the Edge!")
}

else if (browser == 'Chrome'
    || browser == 'Firefox'
    || browser == 'Safari'
    || browser == 'Opera') {
        alert("Okay we support these browsers too");
    }
else {alert ("We hope that this page looks ok!")} 

Перепишите код с использованием одной конструкции switch:

const number = +prompt('Введите число между 0 и 3', '');

if (number === 0) {
  alert('Вы ввели число 0');
}

if (number === 1) {
  alert('Вы ввели число 1');
}

if (number === 2 || number === 3) {
  alert('Вы ввели число 2, а может и 3');
} 


switch (number = +prompt("Введите число между 0 и 3", '')) {
    case 0: 
    alert ("Вы ввели число 0");
    break;

    case 1: 
    alert("Вы ввели число 1");
    break;

    case 2:
    case 3:
        alert("Вы ввели число 2, а может и 3");
    break;

} */



/* Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:

Используя оператор ?
Используя оператор || */


/* function checkAge (age) {
    return (age > 18)? true: confirm("Родители разрешили?")
}

function checkAge (age) {
    return (age > 18) ||confirm("Родители разрешили?")
} */


/* Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

Пример вызовов:

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1 */

/* function min (a,b){
    if (a<b){
        return (a);
    }
    else {
        return(b);
    }

}


function min (a,b) {
    return (a<b)? a: b
};
 */

/* Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n). */

 function pow(x,n) {
    let result = x;

    for (i=1; i<n; i++) {
        result *= n;
    }

    return result;
}

let x = prompt("Введите x", "");
let n = prompt("Введите n", "");

if (n<1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}
else {
    alert(pow(x,n));
} 

 function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  } 




  function pow(x, n) {
  let result=1;
  for(let i=0; i<n; i++) {
      result*=x;}
  return result;
}

let x=prompt("x?", ''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
}
else
{
  alert(pow(x,n))
}

let cars = ['Ghgh', 'gjngjk', 'etytg']
cars.push