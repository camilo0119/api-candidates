import React, {useState, useEffect} from "react";
import { CelebrityCard } from "./CelebrityCard";
import { useDispatch, useSelector } from 'react-redux';
import { typeViewCards } from "../constanst/constants";
import { deviceReducer } from "../../reducers/deviceReducer";
import { setDesktopDevice, setMobileDevice } from "../../actions/device";


export const CelebrityList = () => {

    
    const {candidates} = useSelector(state => state.candidate)
    const [candidateList, setCandidateList] = useState([])
    const [presentationType, setPresentationType] = useState('List')
    const [device, setDevice] = useState('')

    const dispatch = useDispatch();
    
    useEffect(() => {
        setCandidateList(candidates)
    }, [candidates])

    useEffect(() => {
        if (device === 'mobile') {
            setPresentationType('List')
        }
        setDeviceStore()
    }, [device])

    const setDeviceStore = () => {
        switch (device) {
            case 'mobile':
                dispatch(setMobileDevice())
                break;
            case 'desktop':
                dispatch(setDesktopDevice())
                break;
            default:
                break;
        }
    }
    
    const deviceDetect = () => {
        if (window.innerWidth < 600) {
            setDevice('mobile')
        } else {
            setDevice('desktop')
        }
    }
    window.addEventListener('resize', deviceDetect)
    
    const handleSelectTypeView = (e) => {
        setPresentationType(e.target.value)
    }

    return (
        <div>
            <div className="card__container is-flex">
                <div className="align-left" style={{ width: "80%" }}>
                <p className="card__title_list">Previous Rulings</p>
                </div>
                <div className="align-right is-hidden-mobile" style={{ width: "20%" }}>
                <label className="wrap">
                    <select className="dropdown" onChange={handleSelectTypeView}>
                        {
                            typeViewCards.map((type, idx) => (
                                <option value={type} key={idx}>{type}</option>
                            ))
                        }
                    </select>
                </label>
                </div>
            </div>
            <div className="columns is-mobile card__scroll-auto is-gapless">
            {
                candidateList?.map((candidate, idx) => (
                    <div id={candidate.name} className={`column ${presentationType === 'List' ? 'is-full-desktop is-full-tablet' : 'is-4' }`}>
                        <CelebrityCard key={idx} {...candidate} typeView={presentationType}/>
                    </div>
                ))
            }
            </div>
        </div>
    );
};