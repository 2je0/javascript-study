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
