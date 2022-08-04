import { useState, useEffect } from "react";
import clickOnEnter from "../../utils/clickOnEnter";

const Checkbox = ({ value, customStateSetter, label }) => {
    const [checked, setChecked] = useState(value);

    // Update parent form state once local images state has updated
    useEffect(() => {
        customStateSetter(checked);
    }, [checked]);

    function toggleCheckbox() {
        setChecked(!checked);
    }

    return (
        <div className="mt-3 mb-1">
            <input onKeyDown={clickOnEnter} onClick={toggleCheckbox} className="w-5 h-5 inline-block hover:cursor-pointer border-2 border-gray-600 placeholder-gray-500 py-2 mb-2 focus:outline-none focus:border-opacity-0 focus:ring-2 focus:ring-secondarydark" />
            {checked ? <div onClick={toggleCheckbox} className="inline-block hover:cursor-pointer relative -mr-3 bottom-3 right-4 w-3 h-3 bg-secondarydark"></div> : null}
            {label ? <label onClick={toggleCheckbox} className="inline-block hover:cursor-pointer px-3 relative bottom-3">{label}</label> : null}
        </div>
    );
}

export default Checkbox;