import {createStore} from 'redux';

// AddNumber와 DisplayNumber는 depth가 1억개라고 해도 store와 직접 연결된다! 
// 값이 변경되면 store의 state가 변경되고 
// state가 변경되면 구독하고 있는 모든 컴포넌트가 새로 호출 되면서 
// DisplayNumber 컴포넌트가 다시 그려지게 되는 것! 
// 더 이상 데이터를 서로 주고 받기 위한 props를 사용할 필요가 없어짐. 

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
