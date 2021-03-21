import React, {useState} from "react";
import demoData from '../../assets/data.json';
import { CelebrityCard } from "./CelebrityCard";

export const CelebrityList = () => {

    const [candidateList, setCandidateList] = useState(demoData.data)

    return (
        <div>
            <div className="card__container is-flex">
                <div className="align-left" style={{ width: "80%" }}>
                <p className="card__title_list">Previous Rulings</p>
                </div>
                <div className="align-right" style={{ width: "20%" }}>
                <label className="wrap">
                    <select className="dropdown">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    </select>
                </label>
                </div>
            </div>
            {
                candidateList.map(candidate => (
                    <CelebrityCard {...candidate}/>
                ))
            }
        </div>
    );
};