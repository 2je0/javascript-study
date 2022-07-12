## DOM 이란?

DOM은 Document Object Model의 약자이며, 기본적으로 HTML 문서의 구조화된 표현이다.
JavaScript를 사용하여 HTML 요소에 액세스 및 스타일을 조작할 수 있습니다.

```js
<section>
  <p>text</p>
</section>
```

같은 DOM 트리가 있다고 했을때 section 노드 p 노드 text노드가 있는 셈이다.

DOM을 조작하는 데 사용할 수 있는 Document 또는 querySelector 와 같은 다른 많은 것들이 실제로 JavaScript의 일부가 아니라 DOM과 DOM 메소드는 웹 API라고 하는 것의 일부입니다.

## querySelector

다음과 같이 querySelector를 이용해서 DOM을 조작할 수 있다.

```js
document.querySelector(".score").textContent = "10";
document.querySelector("input").value = 10;
```

## 버튼을 클릭 할 때

```js
document.querySelector(".check").addEventListener("click", () => {
  const guessValue = +document.querySelector(".guess").value;
  console.log(guessValue);
});
```

## refactoring

document를 수정하는 작업이 있다면 함수로 만들어준다.
