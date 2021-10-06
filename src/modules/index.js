import { combineReducers } from 'redux';
import main from './main';
import loading from './loading';

// createStore 함수를 사용하여 스토어를 만들때는 리듀서를 하나만 사용해야하기 때문에
// 기존 리듀서를 합쳐야하며 이를 combineReducers 유틸을 통해 처리한다.
// 아래와 같이 modules 디렉토리 내 사용되는 액션 생성함수를 선언하여 사용한다.
const rootReducer = combineReducers({
    main,
    loading
});

export default rootReducer;