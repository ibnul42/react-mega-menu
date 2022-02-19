import React, { useState } from 'react';
import { BiCaretRight } from 'react-icons/bi';
import Second from './Second';

function First({ firstOption, setFirstOption, data, secondOption, setSecondOption }) {
    const [abc, setabc] = useState(0);

    const clickHandler = (e) => {
        console.log(e);
        setabc(e)
        setSecondOption(false);
        setFirstOption(!firstOption);
    }
    return (
        <div className="first-child">
            <ul>
                {data.map((data, id) => (
                    <div key={id} className="">
                        <li onClick={() => clickHandler(data.identifier)}>{data.name} {data.element ?
                            <>
                                <span><BiCaretRight /></span>
                                {data.element ? <Second
                                    previdentifier={data.identifier}
                                    data={data.element}
                                    firstOption={firstOption}
                                    secondOption={secondOption}
                                    setSecondOption={setSecondOption}
                                    abc={abc}
                                /> : null}
                            </>
                            : ""} </li>

                    </div>
                ))}
            </ul>
        </div>
    )
}

export default First;