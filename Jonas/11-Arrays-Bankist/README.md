## Simple Array Methods

```js
let arr = ["a", "b", "c", "d", "e"];
```

## SLICE

배열을 자르는 함수이다. 원본 배열을 변형하지 않으며, 첫번째 인덱스 포함 두번째 인덱스포함x 이전까지 자른다.  
-1... 등 음수값을 이용하면 더 편리하게 사용할 수 있따.

```js
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
```

## SPLICE

배열을 자르는 함수이다. 원본 배열을 변형한다. 첫번째 인덱스 부터 n개의 요소를 자른다.  
-1... 등 음수값을 이용하면 더 편리하게 사용할 수 있따.

```js
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);
```

## REVERSE

배열을 거꾸로 하는 메소드이다. 원본 배열을 변형한다.

```js
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);
```

## CONCAT

배열을 붙이는 메소드이다. 원본 배열을 변형하지 않는다. 스프레드 연산자로도 구현할 수 있다.

```js
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);
```

## JOIN

배열을 하나의 문자열로 만들어주는 메소드이다.

```js
console.log(letters.join(" - "));
```

## 메소드의 새로운 기능 at method

원래 배열의 요소에 접근 할 때 [] 괄호를 사용하였다.  
하지만 마지막 요소에 접근해야할 때는 배열의 길이를 알아야만 arr.length -1 인덱스에 접근할 수 있었다.  
하지만 at 메소드가 나오면서 arr.at(-1) 로도 접근이 가능하게 되었다.

```js
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log("jonas".at(0));
console.log("jonas".at(-1));
```

## Looping Arrays: forEach

다음과 같은 배열이 있다고 했을 때 배열을 한바퀴 돌면서 작업할 수 있다.  
이전에 봤었던 for of 구문을 이용할 수 있다. for of 구문을 이용할 경우 인덱스를 movements.entries() 를 이용해 찾을 수 있다.  
이와 같은 작업을 forEach에서도 할 수 있다.  
forEach 메소드의 콜백함수 인자의 순서는 다음과 같다. `(요소, 인덱스, 전체배열)`

둘을 각각 언제 사용하느냐는 개인의 취향이지만 차이점이 있다면 forEach 구문은 continue와 break같은 기능을 사용할 수 없다.

```js
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---- FOREACH ----");
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
```

## forEach With Maps and Sets

forEach 메소드는 map이나 set에서도 사용할 수 있다.  
map에서 forEach에 들어가는 인자는 value, key ,map 순서이다.

```js
// Map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
```

하지만 set에서는 key가 존재하지 않는다. 따라서 두번째 인자는 없애도 되지만 통일성을 위해서 첫번째 인자와 두번째인자는 value로 설정되어 있다.

```js
// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
```
