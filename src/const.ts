import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-06-13 11:00", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 6월 -> 6월 6일 현충일
export const HOLIDAYS = [6]

export const LOCATION = "사랑의교회 언약채플"
export const LOCATION_ADDRESS = "서울특별시 서초구 반포대로 121"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
export const SHARE_ADDRESS = LOCATION_ADDRESS
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [127.007339, 37.491324]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
export const NMAP_PLACE_ID = 0

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
export const KMAP_PLACE_ID = 0

export const BRIDE_FULLNAME = "박수현"
export const BRIDE_FIRSTNAME = "수현"
export const BRIDE_TITLE = "차녀"
export const BRIDE_FATHER = "박순철"
export const BRIDE_MOTHER = "배순희"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-4955-9025",
    account: "",
  },
]

export const GROOM_FULLNAME = "유은열"
export const GROOM_FIRSTNAME = "은열"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "유경하"
export const GROOM_MOTHER = "남연우"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "",
    account: "기업은행 01055793614",
  },
]
