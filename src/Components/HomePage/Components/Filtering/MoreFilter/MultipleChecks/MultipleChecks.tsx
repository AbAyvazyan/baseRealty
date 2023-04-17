

const MultipleChecks = () =>{
    return(
        <div className={'multiple_checks mf_all'}>
            <div>House Type</div>
            <div className={'multiple_house_types_checks'}>
                <label>
                    <input type="checkbox"/>Stone
                </label>

                <label>
                    <input type="checkbox"/>Monolith
                </label>

                <label>
                    <input type="checkbox"/>Panel
                </label>


                <label>
                    <input type="checkbox"/>Other
                </label>
            </div>
        </div>
    )
}

export default MultipleChecks