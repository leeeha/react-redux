import {createStore} from 'redux';

export default createStore(
    // state는 데이터, action은 그 데이터를 변형하는 행위들! 
    // 이전의 state와 dispatch로부터 받은 action을 참조하여 
    // 새로운 state를 리턴하는 reducer 함수 
    function(state, action){
        if(state === undefined){
            return {number: 0} // state 초기화 
        }

        if(action.type === 'INCREMENT'){
            // AddNumber의 dispatch로부터 받은 action 객체를 참조하여 
            // DisplayNumber의 state인 number 값 변형하기 
            // 복제된 state에서 뒤에 추가되는 property의 값만을 변형시킨다. 
            return {...state, number: state.number + action.size} 
        }

        return state; // 새로운 state 리턴 
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
