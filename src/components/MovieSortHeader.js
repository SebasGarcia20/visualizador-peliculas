import React from 'react'

export const MovieSortHeader = () => {
    return (
        <div className='form'>
            <div>
                <label>Titulo :</label>
                <input
                    type="text"
                    value={"Love"}
                    disabled
                />
            </div>
            <div>
                <label>Año :</label>
                <input
                    type="text"
                    value={"2020"}
                    disabled
                />
            </div>
            <div>
                <label>Tipo :</label>
                <input
                    type="text"
                    value={"Movie"}
                    disabled
                />
            </div>
        </div>
    )
}
