# 비우다

> 우산을 들고 다니지 않는 일상을 꿈꾸다, 비우다
> <br/>
> 🔗 WEB LINK: https://biwooda.vercel.app

![biwooda](https://github.com/Biwooda/biwooda-client/assets/34948133/1b7403fd-df05-4693-a70d-d3b91faf5385)

### 왜 비우다인가요?

예상치 못 한 우천으로 편의점에서 구입한 우산이 집에 쌓여 있으신가요?<br/>
매번 일기예보를 확인하고 우산을 챙기기 귀찮으신가요?<br/>
공유 우산 서비스 비우다를 통해 불필요한 지출과 짐을 모두 해결할 수 있어요.

<br/>

## ❓ How to use

| <img width="200" alt="image" src="https://github.com/Biwooda/biwooda-client/assets/34948133/ca7777a4-c29b-4cc5-ac1f-8703047a5808"> | <img width="200" alt="image" src="https://github.com/Biwooda/biwooda-client/assets/34948133/c4825aa2-56a8-49ed-a87b-097907515924"> | <img width="200" alt="image" src="https://github.com/Biwooda/biwooda-client/assets/34948133/e5460ae1-bb5b-40ca-b9d2-f9dd26b98b92"> | <img width="200" alt="image" src="https://github.com/Biwooda/biwooda-client/assets/34948133/de4dc929-74b1-4095-8a27-dac0359a6650"> |
| :---: | :---: | :---: | :---: |
| 우산함 선택 | 대여기간 선택 | 대여 비용 확인 | 결제 수단 선택 |

🌟 대여 및 반납 방법: https://www.youtube.com/watch?v=9-FQYkFqGb4

<br/>

## 📖 Using Library

| 라이브러리 | 사용 목적 | 버전 |
| :---: | :---: | :---: |
| react-naver-maps | 우산함 위치 정보 제공 | ^0.1.3 |
| qr-scanner | 우산함 ID 스캔을 통한 대여 및 반납 | ^1.4.2 |

<br>

## 💻 Development Techs
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white"> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">

<br>

## 📌Git Convention

### 🔹Commit Convention

- ✨ `[FEAT]` : 새로운 기능 구현
- 📝 `[DOCS]` : README나 WIKI 등의 문서 수정
- ➕ `[ADD]` : Feat 이외의 부수적인 코드 추가, 라이브러리 추가, 새로운 파일 생성
- 🔥 `[REMOVE]` : 폴더 또는 파일 삭제, 쓸모없는 코드 삭제
- 🐛 `[FIX]` : 버그, 오류 해결
- ⏪️ `[RENAME]` : 파일 이름 변경 또는 파일 이동시
- ♻️ `[REFACTOR]` : 기능 추가나 버그 수정이 없는 코드 변경 ( 코드 구조 변경 등의 리팩토링 )
- ✏️ `[CORRECT]` : 문법 오류나 타입의 변경, 이름 변경시
- 🎨 `[STYLE]` : 코드의 의미에 영향을 미치지 않는 변경 사항 ( 스타일 수정, 세미콜론 추가 등 비즈니스 로직에 변경 없음 )
- 🧪 `[TEST]` : 테스트 추가 또는 이전 테스트 수정
- 🧹 `[CHORE]` : src 또는 test 파일을 수정하지 않는 기타 변경 사항 ( 빌드/패키지 매니저 설정 변경 등 )
- 🤝🏻 `[MERGE]` : Merge 하는 경우

### 커밋 예시

- git commit -m "#이슈 번호 [커밋 태그] 커밋 내용"
  - `ex ) git commit -m "#1 [FEAT] 회원가입 기능 완료"`

<br>

### 🔹Branch Convention

- [main] : 최종 배포
- [develop] : 주요 개발, main merge 이전에 거치는 branch
- [feature] : 각자 개발, 기능 추가
- [fix] : 에러 수정, 버그 수정
- [docs] : README, 문서
- [refactor] : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
- [modify] : 코드 수정 (기능의 변화가 있을 때)
- [chore] : gradle 세팅, 위의 것 이외에 거의 모든 것

### 브랜치 명 예시

- feature/#이슈 번호-기능 이름
  - `ex) feature/#1-login`

<br>

### 🔹Branch Strategy

### Git Flow

기본적으로 Git Flow 전략을 이용한다. Fork한 후 나의 repository에서 작업하고 구현 후 원본 repository에 pr을 날린다. 작업 시작 시 선행되어야 할 작업은 다음과 같다.

```java
1. Issue를 생성한다.
2. feature Branch를 생성한다.
3. Add - Commit - Push - Pull Request 의 과정을 거친다.
4. Pull Request가 작성되면 작성자 이외의 다른 팀원이 Code Review를 한다.
5. Code Review가 완료되면 Pull Request 작성자가 develop Branch로 merge 한다.
6. merge된 작업이 있을 경우, 다른 브랜치에서 작업을 진행 중이던 개발자는 본인의 브랜치로 merge된 작업을 Pull 받아온다.
7. 종료된 Issue와 Pull Request의 Label과 Project를 관리한다.
```

- 기본적으로 git flow 전략을 사용합니다.
- main, develop, feature 3가지 branch 를 기본으로 합니다.
- main → develop → feature. feature 브랜치는 feat/기능명으로 사용합니다.
- 이슈를 사용하는 경우 브랜치명을 feature/[issue num]-[feature name]로 합니다.

<br>

### 🔹Issue Convention

- [feat] : 기능 추가
- [fix] : 에러 수정, 버그 수정
- [docs] : README, 문서
- [refactor] : 코드 리펙토링 (기능 변경 없이 코드만 수정할 때)
- [modify] : 코드 수정 (기능의 변화가 있을 때)
- [chore] : gradle 세팅, 위의 것 이외에 거의 모든 것

`ex) [feat] user api 구현`
