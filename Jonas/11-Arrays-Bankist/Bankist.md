[TOC]



# Bankist App

![](images/2022-08-14-02-19-12.png)
![](./starter/Bankist-flowchart.png)

## 첫번째, movement 만들기

![](images/2022-08-14-21-17-34.png)

1. forEach 메소드를 사용한다.
2. 템플릿 리터럴을 사용해서 요소를 만든다
3. `insertAdjacentHTML`을 이용하여 요소를 추가한다.
4. 초반에 컨테이너를 초기화한다 (`innerHTML`)

```js
const displayMovements = function (movement) {
  containerMovements.innerHTML = "";
  movement.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1.movements);
```

## 두번째 balance 구하기 (reduce 이용)

![](images/2022-08-14-21-17-46.png)

```js
const displayCalcBalance = function (arr) {
  const balance = arr.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
displayCalcBalance(account1.movements);
```

## 세번째 요약화면 만들기

![](images/2022-08-14-22-34-30.png)

```js
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
```

## 네번째 로그인 하기

1. form 전송 막기 -> preventDefault();
2. id 필드와 데이터베이스의 아이디와 일치하면 그 계정에 대한 정보를 currentAccount에 저장하기(find 메소드 이용)
3. pin 필드와 currentAccount의 pin이 일치하면 로그인 하도록 만들기
4. 로그인 화면 업데이트
   - 이전까지 만들어놓았던 함수들 이용
   - id 필드와 pin 필드 초기화
   - appContainer 보이게 만들기 위해서 opacity = 100으로 설정

```js
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find((acc) => {
    return inputLoginUsername.value === acc.username;
  });
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //log in
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    calcDisplaySummary(currentAccount);
    displayMovements(currentAccount.movements);
    displayCalcBalance(currentAccount.movements);
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    containerApp.style.opacity = 100;
  }
});
```

## 다섯번째 송금기능 만들기

1. updateUI 함수를 만든다.
   - 전송을 한 후에 기록을 업데이트 해야하므로 하나의 함수로 만들어준다.
2. 송금할 계좌의 username과 금액을 받는다. 이때 송금할 계좌의 정보를 find로 찾아놓는다.
3. 다음과 같은 조건을 만족하면 송금을 진행한다.
   - 잔액이 보내려는 금액보다 큰 경우
   - 송금할 대상이 지정된 경우
   - 송금할 금액이 양수인 경우
   - 자신에게 보내지 않는 경우
4. currentAccount 에는 -amount 를 accountTo 에는 +amount를 해준다.

```js
const updateUI = (acc) => {
  calcDisplaySummary(acc);
  displayMovements(acc.movements);
  displayCalcBalance(acc);
};
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  const accountTo = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  const amount = inputTransferAmount.value;
  if (
    currentAccount.balance >= amount &&
    accountTo &&
    amount > 0 &&
    currentAccount.username !== accountTo.username
  ) {
    currentAccount.movements.push(-amount);
    accountTo.movements.push(+amount);
    updateUI(currentAccount);
    inputTransferTo.value = inputTransferAmount.value = "";
  }
});
```

## 여섯번째, 계정삭제 기능 만들기

findIndex 메소드를 이용해서 현재 계정이 몇번째에 있는지확인한 후에 accounts 배열에서 삭제해주는 기능이다.  
`indexOf`라는 메소드는 특정 값을 찾는 반면 findIndex는 콜백함수를 받아서 특정 조건의 인덱스를 찾는다.

```js
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  const idx = accounts.findIndex((acc) => acc === currentAccount);
  if (
    inputCloseUsername.value === currentAccount.username &&
    inputClosePin.value == currentAccount.pin
  ) {
    accounts.splice(idx, 1);
    containerApp.sytle.opacity = 0;
    inputClosePin.value = inputClosePin.value = "";
  }
});
```

## 일곱번째, 대출받기

대출받는 조건은 movements 배열안에 대출금의 10%이상의 거래기록이 있을 때 가능하다.  
10%이상의 입금내역이 있는지 찾기 위해서는 some 메소드를 이용한다.

```js
btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  const loan = +inputLoanAmount.value;
  if (loan > 0 && currentAccount.movements.some((mov) => mov > loan * 0.1)) {
    currentAccount.movements.push(loan);
    updateUI(currentAccount);
    inputLoanAmount.value = "";
  }
});
```

## 여덟번째, sort 기능 구현

display movement의 기능에 sort를 추가한다.  
sort라는 인자가 참으로 들어올 때에는 정렬을 시키고 아니라면 그대로 둔다.  
이때 원본 배열을 변경시키고 싶진 않으므로 slice메소드를 사용하여 복사를 한다.

그리고 sorted라는 state 변수를 만들어서 버튼을 한번 클릭할 때마다 true false를 바꿔준다.

```js
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
  <div class="movements__row">
    <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>`;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
```

```js
let sorted = false;
btnSort.addEventListener("click", (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
```
