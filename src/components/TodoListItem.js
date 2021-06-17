import React from 'react';
import './scss/TodoList.scss';
import cn from 'classnames'; //조건부 스타일링을 위해 사용
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircle } from 'react-icons/md'; //아이콘 사용

export default function TodoListItem({todo, onRemove, onToggle}) {
    const {id, text, checked} = todo;

    return (
        <li className="TodoListItem">
            {/* <div className="checkbox"> */}
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox/>:  <MdCheckBoxOutlineBlank/>}
                <label className="text">{text}</label>
            </div>
            <button type="button" className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircle/>
            </button>
        </li>
    )
}
