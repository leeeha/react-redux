import {createStore} from 'redux';

// AddNumber�� DisplayNumber�� depth�� 1�ﰳ��� �ص� store�� ���� ����ȴ�! 
// ���� ����Ǹ� store�� state�� ����ǰ� 
// state�� ����Ǹ� �����ϰ� �ִ� ��� ������Ʈ�� ���� ȣ�� �Ǹ鼭 
// DisplayNumber ������Ʈ�� �ٽ� �׷����� �Ǵ� ��! 
// �� �̻� �����͸� ���� �ְ� �ޱ� ���� props�� ����� �ʿ䰡 ������. 

export default createStore(
    // state�� ������, action�� �� �����͸� �����ϴ� ������! 
    // ������ state�� dispatch�κ��� ���� action�� �����Ͽ� 
    // ���ο� state�� �����ϴ� reducer �Լ� 
    function(state, action){
        if(state === undefined){
            return {number: 0} // state �ʱ�ȭ 
        }

        if(action.type === 'INCREMENT'){
            // AddNumber�� dispatch�κ��� ���� action ��ü�� �����Ͽ� 
            // DisplayNumber�� state�� number �� �����ϱ� 
            // ������ state���� �ڿ� �߰��Ǵ� property�� ������ ������Ų��. 
            return {...state, number: state.number + action.size} 
        }

        return state; // ���ο� state ���� 
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
