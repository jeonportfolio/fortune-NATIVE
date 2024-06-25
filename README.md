## REACT NATIVE를 활용한 포츈쿠기 번역 앱 만들기 

## 프로젝트 생성 
 -> npx expo init fortune (javascript 기반)

## LOCLIZATION 
 -> 각각의 언어에 따라 변역을 해줌 (설치 npx expo install expo-localization)
 -> 번역 기능 설치 (npx expo install i18n-js)
 -> 번역기능은 use-translation.js 훅으로 따로 관리 해준다.

 ## 번역 언어 선택 
  -> Button.js로 컴포넌트 화 
  -> 버튼을 누르면 문장이 한국어, 영어, 일본어, 중국어로 번환된다.

  ## 문장 랜덤 도출 
   -> use-cookie 훅을 사용하여 문장을 랜덤으로 도출한다. 