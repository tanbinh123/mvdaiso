const SET_MODAL = 'main/SET_MODAL';

export const setModal = (id, status) => ({
    type: SET_MODAL,
    id,
    status
})

// // Init Set
const initialState = {
    modal: false,
    movies: [
        {
            id: 1,
            name: '샹치와 텐링즈의  전설',
            href: '#',
            imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/08/thumb_x289/thn_a7bc5615bc4247319aa95e1372fb2fce.jpg',
            title: '샹치와 텐링즈의 전설',
            openDt: '2021.09.01',
            runtime: '120분',
            genre: '액션, 어드벤처, 판타지',
            age: '12',
            from: '미국',
            views: '17,615,686'
        }, {
            id: 2,
            name: '해리포터와 아즈카반의 죄수',
            href: '#',
            imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/09/thumb_x289/thn_ce93de4eeb7342a288620248e4df3327.jpg',
            title: '해리포터와 아즈카반의 죄수',
            openDt: '2021.09.01',
            runtime: '120분',
            genre: '액션, 어드벤처, 판타지',
            age: '12',
            from: '미국',
            views: '17,615,686'
        }, {
            id: 3,
            name: '짱구는 못말려 크레용 용사와 4명의 사수꾼 휴지돌돌 말아 코풀자',
            href: '#',
            imageSrc: 'https://www.kobis.or.kr/common/mast/movie/2021/09/thumb_x289/thn_084b6dca2de449a1aee7757a90d30325.jpg',
            title: '짱구는 못말려 크레용 용사와 4명의 사수꾼 휴지돌돌 말아 코풀자',
            openDt: '2021.09.01',
            runtime: '120분',
            genre: '액션, 어드벤처, 판타지',
            age: '12',
            from: '미국',
            views: '17,615,686'
        }
        // More products...
    ],
    pick: ''
}

function main(state = initialState, action = null) {

    switch (action.type) {
        case SET_MODAL:
            return {
                ...state,
                modal: action.status,
                pick: (state.movies.filter(movie => movie.id === action.id))
                // (state.movies.filter(movie => movie.id === action.id))
            }
        // 기본값으로는 state 그대로를 전달해줘야 한다.
        default:
            return state;
    }
}

export default main;