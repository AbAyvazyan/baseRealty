import './InputFilterField.css'

import MultipleSelectCheckmarks from "./MultipleSelectCheckmarks/MultipleSelectCheckmarks";

const InputFilterField = () =>{
    return(
        <form action="" className={'input_filter_form'}>
            <div className={'input_filtering_field'}>
                <MultipleSelectCheckmarks holder={'type'}/>
                <MultipleSelectCheckmarks holder={'rooms'}/>
                <MultipleSelectCheckmarks holder={'floor'}/>
                <MultipleSelectCheckmarks holder={'price'}/>
                <MultipleSelectCheckmarks holder={'place'}/>
            </div>
        </form>
    )
}

export default InputFilterField