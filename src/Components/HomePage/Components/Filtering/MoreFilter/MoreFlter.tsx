import './MoreFilter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FC, useRef, useEffect } from "react"; // Import useRef and useEffect
import MoreFilterRangePart from "./MoreFilterRangePart/MoreFilterRangePart";
import MoreFilterButtonGroup from "./MoreFilterButtonGroup/MoreFilterButtonGroup";
import SingleCheck from "./SingleCheck/SingleCheck";
import MultipleChecks from "./MultipleChecks/MultipleChecks";
import { useTranslation } from "react-i18next";

type TMoreFilter = {
    closeModalHandler: () => void
}

const MoreFilter: FC<TMoreFilter> = ({ closeModalHandler }) => {
    const { t } = useTranslation();

    const modalRef = useRef<any>(null); // Create a ref for the modal

    const handleOutsideClick = (event:MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModalHandler();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className={'more_filter'} ref={modalRef}>
            <div className={'more_filter_upper_part'}>
                <span>{t('More_Filters')}</span>
                <span style={{ cursor: 'pointer' }} onClick={closeModalHandler}><FontAwesomeIcon icon={faXmark} /></span>
            </div>
            <div className={'more_filter_content'}>
                <MoreFilterRangePart name={'Floor'} />
                <MoreFilterRangePart name={'Building_Floors'} />
                <MoreFilterButtonGroup />
                <MultipleChecks title={'House_Type'} houseTypes={['Stone', 'Monolith', 'Panel', 'Other']} />
                <MultipleChecks title={'Renovation'} houseTypes={['Zero_Condition', 'Newly_repaired', 'Good', 'Old_Renovation']} />
            </div>
        </div>
    );
}

export default MoreFilter;
