import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadCandidates, updateCandidate } from "../../../actions/candidates";
import moment from "moment";
import { THANKS_FOR_VOTE, VOTE_AGAIN, VOTE_NOW } from "../../constanst/constants";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

export const VoteOption = (props) => {
    const { gridView, lastUpdated, category } = props;
    const dispatch = useDispatch();
    const [candidateInfo, setCandidateInfo] = useState(props);
    const [voted, setVoted] = useState(false);
    const [voteStatus, setVoteStatus] = useState(VOTE_NOW);
    const timeAgoText = `${timeAgo.format(new Date(lastUpdated))} in ${category}`;
    const [textLabel, setTextLabel] = useState(timeAgoText);
    

  const registerVote = async () => {
    await dispatch(updateCandidate(candidateInfo.id, candidateInfo));
    await dispatch(loadCandidates());
    setTextLabel(THANKS_FOR_VOTE);
    setVoteStatus(VOTE_AGAIN);
  };

  const voteAgain = () => {
    setVoted(false);
    setVoteStatus(VOTE_NOW);
    setTextLabel(timeAgoText);
  }

  const updateInfo = (typeVote) => {
    setVoted(true)
    setCandidateInfo((old) => ({
      ...old,
      lastUpdated: moment().format(),
      votes: {
        ...old.votes,
        [typeVote]: old.votes[typeVote] + 1,
      },
    }));
  };

  return (
    <div>
        <p className="card__last-update">{`${textLabel}`}</p>
        <div className="columns is-mobile is-gapless is-vcentered mt-10">
            {gridView && <div className="column is-4"></div>}
            <div
                className={`column is-2-mobile ${
                !gridView ? "is-hidden-desktop is-hidden-tablet" : ""
                }`}
            ></div>
            <div className="column">
                <button
                className={`icon-button is-link ${
                    gridView ? "button__vote-grid" : "button__vote"
                }`}
                aria-label="thumbs up"
                onClick={() => updateInfo("positive")}
                >
                <img src="assets/img/thumbs-up.svg" alt="thumbs up" />
                </button>
            </div>
            <div className="column">
                <button
                className={`icon-button is-link ${
                    gridView ? "button__vote-grid" : "button__vote"
                }`}
                aria-label="thumbs down"
                onClick={() => updateInfo("negative")}
                >
                <img src="assets/img/thumbs-down.svg" alt="thumbs down" />
                </button>
            </div>
            <div className="column is-half">
                <button
                className={`icon-button button__vote-now ${
                    gridView && "button__vote-now-grid"
                } ${voted ? "is-link" : "is-disabled"}`}
                aria-label="vote now"
                onClick={() => (voteStatus === VOTE_NOW && voted) ? registerVote() : voteAgain()}
                >
                {voteStatus}
                </button>
            </div>
        </div>
    </div>
  );
};
