import React from 'react'

function Second({ data, secondOption, setSecondOption, firstOption, previdentifier, abc }) {
    console.log(abc, data);
    return (
        <div className={`second-child ${firstOption ? 'active' : 'inactive'} `}>
            {data.map((data, index) => (
                <>
                    {abc === data.identifier ? <li key={index}>{data.name}</li> : null}
                </>
            ))}
        </div>
    )
}

export default Second