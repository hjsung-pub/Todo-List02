import React, { useState, useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
import './scss/TodoInsert.scss';

export default function TodoInsert({onInsert}) {

    const [value, setValue] = useState('');

    const onChange = useCallback( //컴포넌트가 리렌더링 될때마다 함수를 새로 만드는 것이 아니라, 한 번 함수를 만들고 재 사용할 수 있도록 하기위해 사용
        (e) => {
            setValue(e.target.value);
        },
        []
    );

    const onSubmit = useCallback( //onSubmit은 enter를 눌러도 이벤트가 발생하지만 onClick은 keypress이벤트를 따로 작성 해야한다. 
        (e) => {
            onInsert(value);
            setValue(''); //value값 초기화

            //submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
            //이를 방지하기 위해 이 함수를 호출
            e.preventDefault();
        },
        [onInsert, value],
    )

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    )
}
