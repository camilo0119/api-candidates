import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { loadCandidates, updateCandidate } from '../../../actions/candidates'

export const VoteOption = (props) => {

    const dispatch = useDispatch();
    const [candidateInfo, setCandidateInfo] = useState(props)

    const registerVote = () => {
        dispatch(updateCandidate(candidateInfo.id, candidateInfo));
        dispatch(loadCandidates());
    }

    const updateInfo = (typeVote) => {
        setCandidateInfo(old => ({
            ...old,
            votes: {
                ...old.votes,
                [typeVote]: old.votes[typeVote] + 1
            }
        }));
    }

    return (
        <div className="columns is-mobile is-gapless is-vcentered mt-10">
            <div className={`column is-2-mobile ${!props.gridView && 'is-hidden-desktop is-hidden-tablet'}`}></div>
            <div className="column">
                <button className="icon-button button__vote" aria-label="thumbs up" onClick={()=>updateInfo('positive')}>
                    <img src="assets/img/thumbs-up.svg" alt="thumbs up"/>
                </button>
            </div>   
            <div className="column">
                <button className="icon-button button__vote" aria-label="thumbs down" onClick={()=>updateInfo('negative')}>
                    <img src="assets/img/thumbs-down.svg" alt="thumbs down"/>
                </button>
            </div>   
            <div className="column is-half">
                <button className="icon-button button__vote-now" aria-label="vote now" onClick={registerVote}>
                    Vote Now
                </button>
            </div>   
        </div>
    )
}
