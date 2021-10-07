import axios from 'axios';

// getMovie - 영화목록
//
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

// getMovieDetail - 영화 상세정보
//
// movieCd	문자열	영화코드를 출력합니다.
// movieNm	문자열	영화명(국문)을 출력합니다.
// movieNmEn	문자열	영화명(영문)을 출력합니다.
// movieNmOg	문자열	영화명(원문)을 출력합니다.
// prdtYear	문자열	제작연도를 출력합니다.
// showTm	문자열	상영시간을 출력합니다.
// openDt	문자열	개봉연도를 출력합니다.
// prdtStatNm	문자열	제작상태명을 출력합니다.
// typeNm	문자열	영화유형명을 출력합니다.
// nations	문자열	제작국가를 나타냅니다.
// nationNm	문자열	제작국가명을 출력합니다.
// genreNm	문자열	장르명을 출력합니다.
// directors	문자열	감독을 나타냅니다.
// peopleNm	문자열	감독명을 출력합니다.
// peopleNmEn	문자열	감독명(영문)을 출력합니다.
// actors	문자열	배우를 나타냅니다.
// peopleNm	문자열	배우명을 출력합니다.
// peopleNmEn	문자열	배우명(영문)을 출력합니다.
// cast	문자열	배역명을 출력합니다.
// castEn	문자열	배역명(영문)을 출력합니다.
// showTypes	문자열	상영형태 구분을 나타냅니다.
// showTypeGroupNm	문자열	상영형태 구분을 출력합니다.
// showTypeNm	문자열	상영형태명을 출력합니다.
// audits	문자열	심의정보를 나타냅니다.
// auditNo	문자열	심의번호를 출력합니다.
// watchGradeNm	문자열	관람등급 명칭을 출력합니다.
// companys	문자열	참여 영화사를 나타냅니다.
// companyCd	문자열	참여 영화사 코드를 출력합니다.
// companyNm	문자열	참여 영화사명을 출력합니다.
// companyNmEn	문자열	참여 영화사명(영문)을 출력합니다.
// companyPartNm	문자열	참여 영화사 분야명을 출력합니다.
// staffs	문자열	스텝을 나타냅니다.
// peopleNm	문자열	스텝명을 출력합니다.
// peopleNmEn	문자열	스텝명(영문)을 출력합니다.
// staffRoleNm	문자열	스텝역할명을 출력합니다.


const key = "662aa9a93a6059904fdee2a56fd7f504";

export const getMovie = ({ date, per_page }) =>
    axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&itemPerPage=${per_page}&openStartDt=${date}`)

export const getMovieDetail = (code) =>
    axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${code}`)