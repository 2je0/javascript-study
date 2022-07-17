# 개요

Javascript is a  
`high-level`,  
`prototype-based object-oriented`,  
`multi-paradigm`,  
`interpreted or just-in-time compiled`,  
`dynamic`,  
`single-thread`,  
`garbage-collected` programming language with  
`first-class function` and non-blocking  
`event loop concurrency model`

## 자바스크립트 엔진과 런타임

소스코드를 기계가 이해하려면 기계어로 바꾸는 과정이 필요하다. 기계어로 바꾸고 실행하는 방식은 여러가지가 있는데 다음과 같다.

### compilation

컴파일 언어의 실행과정은 먼저 소스코드를 전부 기계어로 번역한 후에 `portable` 파일을 만들어 놓는다. 그리고 실행하면 프로그램이 구동되게 되는데 컴파일 전에는 실행할 수 없다.

### interpretation

해석형 언어의 실행과정은 단순히 한줄을 읽고 그 줄을 기계어로 바꾸어 실행시킨다. 해석형 언어의 단점은 매우 느리다는데에 있다. 자바스크립트는 예전에 해석형 언어로서 사용이 되었지만 지금은 개선되어 하이브리드 형태를 취하고 있다.

### Just-in-time(JIT) compilation

두 형태를 혼합한 jit이다. 소스코드 전체를 먼저 기계어로 바꾸는 컴파일 과정이후에 `portable` 파일을 저장하지 않고 실행시킨다.

### js 엔진 작동 과정

Parsing : 소스코드를 통해서 AST(Abstract Syntax Tree, 추상 구문 트리)를 만든다. 언어에 의미 있는 조각으로 const 또는 function 키워드와 같은 모든 조각을 구조화된 방식으로 트리에 삽입 저장한다. (구문 오류도 확인)

Compilation : 그리고 생성된 AST를 가져와서 기계어로 컴파일. (Just in time)

Execution : 기계 코드는 즉시 실행 (Call Stack 에서)

Optimization : 최적화 (실행 도중에)

![](images/2022-07-17-21-16-20.png)

최적화를 시키고 실행을 하면 느려진다. 따라서 가능한 한 빨리 실행을 시작할 수 있도록 최적화되지 않은 기계어 코드 버전을 만든다.
그 다음 백그라운드에서 이 코드를 최적화한다. 이미 실행 중인 프로그램이 실행되는 동안 다시 컴파일된다. 최적화 후에 최적화되지 않은 코드는 단순히 스윕된다.

parsing, compilation, optimization은 코드가 접근할 수 없는 특별한 스레드에서 실행이 됨(메인스레드와 분리)

## 런타임

자바스크립트 런타임을 큰 박스라고 생각해보자. 우리가 필요로 하는 모든것을 포함하는 박스.
브라우저에서 자바스크립트를 실행하기위해선 엔진이 필요하다. 따라서 런타임은 항상 자바스크립트 엔진이다 (?)
런타임은 항상 자바스크립트 엔진 (엔진이 없으면 런타임도 없다.) 하지만 엔진으론 충분하지 않고 web api에 대한 접근 권한이 필요함. (DOM, Timer, fetch ...) 이런 웹api는 런타임의 일부이다.

자바스크립트 런타임은 또한 Callback queue를 포함한다. 실행준비가 된 모든 콜백함수를 포함하는 데이터 구조인데, 예를들어 이벤트 리스터 같은 함수들은 콜백함수이다. 콜백함수가 실행이되면 콜백 큐에 놓이게 되고 Call Stack이 비어 아무것도 없다면 콜백 큐에서 콜백함수가 스택으로 전달이 된다. 이것을 `이벤트 루프`라고 부른다.
![](images/2022-07-17-21-49-28.png)
이 이벤트 루프는 자바스크립트를 non-blocking으로 만든다.

node js 의 런타임 같은 경우에는 web apis 가 없고 그 자리에 c++ bindings & thread pool 이 있다.
