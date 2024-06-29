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

 ## async storage 설치 
  -> npx expo install @react-native-async-storage/async-storage
  -> 사용자가 선택한 언어를 기억한다.

  ## 로딩화면 제작 
   -> 로딩 화면 피그마로 제작 
   -> npx expo install expo-splash-screen 로 설치
   -> 로딩속도에 맞춰 언어 default값 보여주기
   -> Lottiefiles를 활용해 동적인 로딩화면 생성 (애니메이션을 코딩으로 용량크기 작음 -> JSON형식의 파일로 받음)
   -> LoadingVIew.js를 통해 애니메이션화  (컴포넌트 생성)
   -> npx expo install lottie-react-native 설치 

   ## 날짜 변환 텍스트화 
   -> react string format 설치 npm install react-string-format
