import React from 'react'
import { VoteOption } from '../commons/vote/VoteOption';

export const CelebrityCard = ({picture, name, description, votes, lastUpdated}) => {

    const {positive, negative} = votes;
    const totalVotes = positive + negative;
    const porcentPositive = ((positive / totalVotes) * 100).toFixed(1);
    const porcentNegative = ((negative / totalVotes) * 100).toFixed(1);
    const positiveImage = porcentPositive > porcentNegative

    const styles = {
        backgroundStyle: {
            backgroundImage: `linear-gradient(270deg, rgb(128 128 128 / 98%) 8%, rgb(0 0 0 / 22%) 46%), url(assets/img/${picture})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '300px',
        }
    }

    return (
        <div className="card__glass-background" style={styles.backgroundStyle}>
            <div className="columns is-gapless is-vcentered">
                <div className="column is-flex">
                    <div className="card__align-left">
                    <button className="icon-button button__vote m0" aria-label={`${positiveImage ? 'thumbs up' : 'thumbs down'}`}>
                        <img src={`assets/img/${positiveImage ? 'thumbs-up.svg' : 'thumbs-down.svg'}`} alt="thumbs down"/>
                    </button>
                    </div>
                    <div className="card__align-center">
                        <div className="columns is-multiline">
                            <div className="column is-12">
                                <p className="card__title">{name}</p>
                            </div>
                            <div className="column is-12">
                                <p className="card__description">{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="card__align-right">
                        <p className="card__last-update">{lastUpdated}</p>
                        <VoteOption/>
                    </div>
                </div>
            </div>
            <div className="columns is-gapless card__results-resume">
                <div className="column is-flex">
                    <div className="align-right card__winner card__results-statics is-vcentered" style={{width: `${porcentPositive}%`, paddingLeft: 20}}>
                        <div className="is-flex">
                            <img src="assets/img/thumbs-up.svg" width="30px" style={{paddingRight: 10}}/>
                            {`${porcentPositive}%`}
                        </div>
                    </div>
                    <div className="align-left card__loser card__results-statics is-vcentered" style={{width: `${porcentNegative}%`, paddingRight: 20}}>
                    <div>
                            {`${porcentNegative}%`}
                            <img src="assets/img/thumbs-down.svg" width="30px" style={{paddingLeft: 10}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
