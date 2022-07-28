# 문자열

- `[]` 를 사용하여 인덱스 접근을 할 수 있다.
- length 메소드를 사용할 수 있다.
- indexOf 메소드를 사용하여 위치를 찾아낼수 있다. (맨 앞)
- lastIndexOf 메소드를 사용하여 위치를 찾아낼수 있다. (맨 뒤)
- slice 메소드를 사용해서 인자가 하나이면 idx~ 끝까지, 인자가 두개이면 시작이상 끝미만으로 자를 수 있다.
- toLowerCase() 로 전부 소문자 또는 toUpperCase()로 전부 대문자로 바꿀 수 있다. 일부만 바꾸고 싶다면 인덱스 접근을 통해 바꿔주면 된다.

```js
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
```

## 문자열이 primitive 인데 메소드를 사용할 수 있는 이유

JavaScript는 자동으로 배후에서 해당 문자열 프리미티브를 문자열 객체로 변환
그런 다음 객체에서 메서드호출 -> boxing이라고 한다.
문자열에서 메서드를 호출할 때마다 객체로 바꿔주고 메서드 호출이 끝나면 객체는 다시 일반 문자열 프리미티브로 변환된다.
결국 모든 문자열 메소드는 프리미티브를 반환한다.

## comparing

- trim() 메소드로 공백과 개행을 자른 후 비교해준다.

```js
const loginEmail = "  Hello@Naver.cOM \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);
```

## replacing

- replace() 메소드를 쓰면 특정 문자 또는 문자열을 교체해줄 수 있는데 이때 첫번째 일치하는 문자열만 바뀌기 때문에 전부 바꾸고 싶다면 replaceAll을 사용해야한다.

```js
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));
```

## boolean 반환

- includes() 메소드는 특정 문자열이 포함되어있는지 알수 있는 메서드이다.
- startWith() endsWith() 메소드는 특정 문자열로 시작하는지/끝나는지 알 수 있는 메소드이다.

```js
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
```

## Split and join

capitalizeName 함수는 띄어쓰기로 구분된 성과 이름의 첫글자만 대문자로 바꾸는것입니다. 나머지는 소문자입니다.
그러기 위해서는 먼저 모두 소문자로 바꾼 후 split을 이용하여 띄어쓰기를 기준으로 나누고 replace를 이용해 첫번째 문자만 대문자로 바꿉니다.

```js
console.log("a+very+nice+string".split("+"));
console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");
```

## Padding

padding 메소드를 사용하면 n자리 문자열을 만드는데에 특정문자 또는 문자열을 채워넣을 수 있다.
예를들어 `1234` 문자열이 마지막으로 들어가는 12자리 문자열 - 카드번호 -를 만들고싶을 때 사용할 수 있다.
padStart() 메소드를 사용하면 된다.

```js
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));
```

## Repeat

repeat 메소드를 쓰면 특정 문자 또는 문자열을 반복할 수 있다.

```js
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
```

## Challenge4

다음과 같은 snake case인 문자열을 가지고 camel case의 문자열을 만들어보자

```
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
```

```js
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textAreaEl = document.querySelector("textarea");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", () => {
  const text = textAreaEl.value;
  const textArr = text.split("\n");
  const res = [];
  let maxx = -1;
  for (const i of textArr) maxx = Math.max(maxx, i.length);
  for (const i of textArr) {
    const splitText = i.trim().toLowerCase().split("_");
    const splitTextUpper = [];
    for (const j of splitText) {
      splitTextUpper.push(j.replace(j[0], j[0].toUpperCase()));
    }
    res.push(splitTextUpper.join("").padEnd(maxx, " "));
  }
  for (const [idx, item] of res.entries()) {
    console.log(`${item} ${"✅".repeat(idx + 1)}`);
  }
});
```
