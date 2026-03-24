# booktotext

사진 속 텍스트를 추출하는 단일 HTML 앱 — Claude Vision API 기반

## 기능

- 이미지 드래그 앤 드롭 또는 클릭으로 업로드
- Claude Sonnet Vision으로 OCR 처리
- 추출 결과 복사
- 업로드 기록 표시 (썸네일 · 파일명 · 업로드 시각)
- 업로드된 사진 24시간 후 자동 만료 처리

## 사용법

1. `index.html`을 브라우저로 열거나, GitHub Pages로 배포
2. 사진 업로드 → "텍스트 추출하기" 클릭
3. 결과 복사

> Claude API 호출은 클라이언트에서 직접 이루어집니다.  
> `claude-sonnet-4-20250514` 모델을 사용합니다.

## 배포 (GitHub Pages)

```
Settings → Pages → Source: main branch / root
```

## 주의

- 탭을 닫거나 새로고침하면 업로드 기록은 초기화됩니다 (세션 메모리 기반)
- 영구 저장이 필요하면 별도 백엔드 연동이 필요합니다

---

by [nainn-a](https://github.com/nainn-a)
