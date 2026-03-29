import mapGuideImage from "../../images/map-guide.png"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <div className="map-guide">
          <img src={mapGuideImage} alt="약도" style={{ width: "100%", borderRadius: "0.5rem" }} />
        </div>
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 2호선 <b>서초역 3번 출구</b> 도보 1분
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선(파랑): 140, 406, 740
            <br />
            - 지선(초록): 3412, 서초18
            <br />
            <b>사랑의교회</b> 또는 <b>서초역</b> 하차
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>사랑의교회</b> 검색
          </div>
          <div />
          <div className="content">
            <b>※ 교회 사정상 화환은 정중히 사양합니다.</b>
            <br />
            <br />
            교회 주차공간이 협소하니 가급적
            <br />
            대중교통을 이용해 주시기 바랍니다.
            <br />
            차량 이용 시 <b>청첩장을 지참</b>하셔서
            <br />
            교회주차장 입구에 제시해 주시길
            <br />
            부탁드립니다.
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
