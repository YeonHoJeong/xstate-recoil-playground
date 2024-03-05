## Note.

XState 홈페이지에 가보면 Counter Machine 예제가 있다.
머신에 대한 예제만 있기 때문에, 머신을 사용해서 Counter를 구현해보도록 한다.

---

Counter 예제를 만든 후, CounterMachine을 적용한 컴포넌트 내부에서 context 내부에서 업데이트가 일어나면 컴포넌트가 전체적으로 update가 일어나는 것 같다.
start-xstate 예제를 살펴보면 MUI button을 맨 밑에 엄청나게 많이 생성해뒀는데, 맨 위에있는 INC나 SET Input을 통해서 context의 값을 바꾸면 해당 컴포넌트에 존재하는 요소들이 모두 update 되는 것 같다.

맨 위에 테스트로 정의해둔 div 요소들도 같이 업데이트 된다. 얘네들은 Machine에서 비롯된 state를 사용하지 않는다.

이것을 어찌 돌릴 방법이 없을까? 고민을 좀 해봐야겠다.
