## Converting and Checking Numbers

isNaN('20') 을 하면 false가 나오기 때문에 Number인지아닌지 판별하기 위해서는 isFinite가 나을 수도 있다.

```js
console.log(23 === 23.0); //true

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

// Conversion
console.log(Number("23")); //23
console.log(+"23"); //23

// Parsing
console.log(Number.parseInt("30px", 10)); //30
console.log(Number.parseInt("e23", 10)); //NaN

console.log(Number.parseInt("  2.5rem  ")); //2
console.log(Number.parseFloat("  2.5rem  ")); //2.5

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN("20")); //false
console.log(Number.isNaN(+"20X")); //true
console.log(Number.isNaN(23 / 0)); //false

// Checking if value is number
console.log(Number.isFinite(20)); //true
console.log(Number.isFinite("20")); //false
console.log(Number.isFinite(+"20X")); //false
console.log(Number.isFinite(23 / 0)); //false

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false
```

## Math and Rounding

### min max PI trunc

강제 형변환을 일으켜서 문자열 '23'도 가능하다. 하지만 parsing은 안되기 때문에 '23px'는 안된다.

```JS
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2));

console.log(Math.min(5, 18, 23, 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);
```

### random 범위 지정

```js
console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20));
```

### Rounding integers

```js
console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

console.log(Math.trunc(23.3));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));
```

## The Remainder Operator

나머지 연산자를 이용해서 (%) 짝수행, 또는 3번째 행마다 색칠을 할 수 있다.

```js
labelBalance.addEventListener("click", function () {
  [...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = "orangered";
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = "blue";
  });
});
```

## Numeric Separators

엄청나게 큰 숫자를 적을 때 쉼표가 없어서 불편할 때가 있다.  
이럴 때 *로 구분해주면 숫자로 인식한다.  
소수점도 마찬가지인데, 숫자와 숫자 사이에만 *를 사용할 수 있다. .전후에 사용할 수는 없다
주의해야할 점이 하나 더있는데 문자열에 \_언더바가 있을 경우 인식하지 못한다.

```js
// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.141_5;
console.log(PI);

console.log(Number("230_000")); // NaN
console.log(parseInt("230_000")); //230
```

## Working with BigInt

자바스크립트 변수는 64비트중 53비트를 숫자표현에 사용한다.  
따라서 표현할수 있는 가장 큰 숫자는 `2 ** 53 - 1`이다. 이 수보다 커지면 부정확해진다.

```js
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
```

그럴 경우를 대비해서 `BigInt`라는 자료형이 있다.
BigInt는 int형과 혼합해서 연산할 수 없다. 따라서 BigInt(int)로 변환해주어야한다.  
=== 연산자는 강제형변환을 하지 않기때문에 20n > 15와 20n == 20은 판별할 수 있지만 20n === 20은 판별할 수 없다.  
또한 int형이기 때문에 나눗셈을 해도 bigint로서 소수점이 떼어진다.

```js
console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");

console.log(huge + " is REALLY big!!!");

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
```

## Creating Dates

### Create a date

다음의 여러 방식을 이용해서 날짜를 생성할 수 있다.  
month는 0부터 시작해서 1월이 0과 매치된다.  
new Date(); 는 현재 시간이다.  
타임스탬프는 1970-1-1로 부터 얼마나 지났는지를 ms로 나타낸 것이다.

```js
const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));
```

### Working with dates

다음과 같은 메소드를 통해서 원하는 정보를 찾아낼 수 있다.  
요일은 일요일부터시작해서 0이 일요일이다.  
날짜를 찾을려면 getDate 해야하고 요일을 찾으려면 getDay 해야한다.  
타임스탬프를 이용해서 날짜를 찾아낼 수도 있다.

```js
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
```
