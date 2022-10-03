## 버튼을 누르면 최상단으로 이동하는 문제

`href='#'` 으로 되어있어서 버튼을 클릭하면 최상단으로 이동하게 됨.  
이를 막기 위해서 openmodal 함수에서 `preventDefault`를 해주면 해결.

```js
<li class='nav__item'>
  <a class='nav__link nav__link--btn btn--show-modal' href='#'>
    Open account
  </a>
</li>
```

## openModal 전부에 함수달기

```js
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
```

```js
btnsOpenModal.forEach((btn) => {
  btn.addEventListener("click", openModal);
});
```

## Dom Api behind the scenes

![](images/2022-10-03-14-30-49.png)
DOM API가 이러한 다양한 유형의 노드로 나뉩니다.  
노드의 유형에 따라 다른 속성과 메서드에 액세스할 수 있습니다.  
그리고 그들 중 일부는 더 많은 속성과 메서드를 상속받기도 합니다.

요소 또는 문서의 addEventListener 메서드가 실제로 작동하는 이유  
노드 유형의 부모인 EventTarget이라는 특수한 노드 유형이 있기 때문입니다.
이것으로 상속 덕분에, 모든 단일 유형의 노드에서 addEventListener를 호출할 수 있습니다.
