import axios from 'axios';

// 영화진흥원::영화목록
// key	문자열(필수)	발급받은키 값을 입력합니다.
// curPage	문자열	현재 페이지를 지정합니다.(default : “1”)
// itemPerPage	문자열	결과 ROW 의 개수를 지정합니다.(default : “10”)
// movieNm	문자열	영화명으로 조회합니다. (UTF-8 인코딩)
// directorNm	문자열	감독명으로 조회합니다. (UTF-8 인코딩)
// openStartDt	문자열	YYYY형식의 조회시작 개봉연도를 입력합니다.
// openEndDt	문자열	YYYY형식의 조회종료 개봉연도를 입력합니다.
// prdtStartYear	문자열	YYYY형식의 조회시작 제작연도를 입력합니다.
// prdtEndYear	문자열	YYYY형식의 조회종료 제작연도를 입력합니다.
// repNationCd	문자열	N개의 국적으로 조회할 수 있으며, 국적코드는 공통코드 조회 서비스에서 “2204” 로서 조회된 국적코드입니다. (default : 전체)
// movieTypeCd	문자열	N개의 영화유형코드로 조회할 수 있으며, 영화유형코드는 공통코드 조회 서비스에서 “2201”로서 조회된 영화유형코드입니다. (default: 전체)
const key = "662aa9a93a6059904fdee2a56fd7f504";

export const getMovie = (date) =>
    axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=` + key + `&itemPerPage=50` + `&openStartDt=` + date)

export const getMovieDetail = (code) =>
    axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=` + key + `&movieCd=` + code)