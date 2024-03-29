# XState + Recoil을 사용해보자

WebGL이나 Canvas와 같은 Context의 상태를 관리하다가 버그가 너무 빈번하게 터지는 경우가 많다.

보통 React를 같이 사용하다 보니 나오는 문제들인데 React는 DOM을 위한 라이브러리이기에 위의 상태를 공유하려 들면 언젠가 어거지로 싱크를 맞춰야 되는 상황이 오는 것 같다.

DOM과 Canvas Context의 상태를 분리하면서 자연스럽게 작업을 할 수 있는 방법이 무엇이 있을까?
고민을 하던 중 XState가 눈에 띄었다.

흔히 게임을 만들 때 작성하던 로직들을 유한 상태 오토마타 _(FSM : Finite State Machine)_ 라 한다.
나의 주관적인 풀이에 의하면 한정된 상태를 이용하여 절차적인*(기계적인)* 로직을 작성할 수 있는 환경을 뜻하는 것으로 보인다.

실제로 XState의 예제를 살펴보니 비슷한 느낌을 받았다.

XState만을 사용하여 웹 환경의 어플리케이션의 로직을 구성하고 끝내기에는 영 힘들 것으로 보이니 DOM 과의 소통이 필요한 구간에서는 Recoil을 통해 공유를 해보고 싶었다.

React State는 DOM 만을 위한 상태로 남기고 싶다. (UXUXUXUXUX)

## 무엇을 해볼 것인가?

XState 예제를 통해 공부를 좀 해보고 싶으니 Playground 형태로 프로젝트를 우선 구성해두고, 예제를 천천히 돌려봐야겠다.

주석을 충분히 작성해두려고 하는데, 필요하면 해당 예제의 폴더 안에 md를 통해 기록을 남겨둬야겠다.

## 찾아봐야 할 것들

1. Non-Serialized Data를 담을 수 있는가?
2. XState의 상태 업데이트 내부 로직은 어떤가?
3. Recoil과 함께 사용할만한가?
   - Jotai는 XState를 지원하더라.. [Jotai 만든 아저씨가 찍은 강의 비슷한 영상이 있다.](https://egghead.io/courses/complex-state-management-in-react-with-jotai-and-xstate-3be0a740)
   - 사실 과도한 라이브러리 사용이 아닌가 싶기도 하다. 그래서 XState를 먼저 사용해 보는 것도 있고...
   - 어차피 내가 생각한 역할은 정해져있기 때문에 큰 충돌은 나지 않을 것으로 보이긴 함
   - 일반적인 웹 페이지와 같은 상태 사용이 아니기 때문도 있음, 그러나 웹 환경은 계속 진화되기 때문에 오늘 내가 고민한 것들이 정답은 아니더라도 언젠가는 유의미 해질 것이라 생각함

## 찾다가 얻은 것들

1. XState Visualizer : https://stately.ai/editor?source=viz
   - 위 링크가 신 버전이라 하였음
