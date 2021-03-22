import React, {useState, useEffect} from "react";
import { CelebrityCard } from "./CelebrityCard";
import { useSelector } from 'react-redux';
import { typeViewCards } from "../constanst/constants";


export const CelebrityList = () => {


    const {candidates} = useSelector(state => state.candidate)
    const [candidateList, setCandidateList] = useState([])
    const [presentationType, setPresentationType] = useState('List')

    useEffect(() => {
        setCandidateList(candidates)
    }, [candidates])

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
                    <div className={`column ${presentationType === 'List' ? 'is-full-desktop' : 'is-4' }`}>
                        <CelebrityCard key={idx} {...candidate} typeView={presentationType}/>
                    </div>
                ))
            }
            </div>
        </div>
    );
};