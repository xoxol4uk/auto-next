import React from 'react';
import s from "./RulesOnMain.module.css";

const RulesOnMain = (props) => {
    return (
        <div className={s.rules}>
            <h2>Введите номер автомобиля, чтобы пробить его по открытой базе МВД</h2>
            <p><b>Советы:</b></p>
            <ul>
                <li>Регистр (размер букв) не имеет значения. Поэтому можно вводить как строчные (маленькие), так и прописные (большие).</li>
                <li>Пробелы не влияют на результат, т.е. можете как ставить их между цифрами, кодом региона и серией номера, 
                    так и не ставить.</li>
                <li>Минимальное допустимое количество введенных символов 3, а максимальное – 11 (вместе с пробелами).</li>
            </ul>
        </div>
    )
}

export default RulesOnMain;