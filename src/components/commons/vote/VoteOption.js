import React from 'react'

export const VoteOption = () => {
    return (
        <div className="columns is-mobile is-flex is-3">
            <div className="column">
                <button className="icon-button button__vote" aria-label="thumbs up">
                    <img src="assets/img/thumbs-up.svg" alt="thumbs up"/>
                </button>
            </div>   
            <div className="column">
                <button className="icon-button button__vote" aria-label="thumbs down">
                    <img src="assets/img/thumbs-down.svg" alt="thumbs down"/>
                </button>
            </div>   
            <div className="column is-half is-vcentered">
                <button className="icon-button button__vote-now" aria-label="vote now">
                    Vote Now
                </button>
            </div>   
        </div>
    )
}
