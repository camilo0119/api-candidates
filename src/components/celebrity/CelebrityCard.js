import React from "react";
import { VoteOption } from "../commons/vote/VoteOption";

export const CelebrityCard = (props) => {
  const { picture, name, description, votes, typeView } = props;
  const listView = typeView === "List";
  const gridView = typeView === "Grid";
  const { positive, negative } = votes;
  const totalVotes = positive + negative;
  const porcentPositive = ((positive / totalVotes) * 100).toFixed(1);
  const porcentNegative = ((negative / totalVotes) * 100).toFixed(1);
  const positiveImage = porcentPositive > porcentNegative;
  
  const styles = {
    backgroundStyle: {
      backgroundImage: `linear-gradient(270deg, rgb(128 128 128 / 98%) 8%, rgb(0 0 0 / 22%) 46%), url(assets/img/${picture})`,
      position: "relative",
      backgroundSize: `${gridView ? 'cover' : ''}`
    },
  };
  
  return (
    <div
      className={`card__glass-background ${
        gridView && "card__glass-background-grid"
      }`}
      style={styles.backgroundStyle}
    >
      <div
        className={`columns is-gapless is-multiline ${
          gridView && "card__content mb-50"
        }`}
      >
        {listView && (
          <div className="column is-3 is-2-mobile is-hidden-mobile">
            <button
              className="icon-button button__vote m0"
              aria-label={`${positiveImage ? "thumbs up" : "thumbs down"}`}
            >
              <img
                src={`assets/img/${
                  positiveImage ? "thumbs-up.svg" : "thumbs-down.svg"
                }`}
                alt="thumbs down"
              />
            </button>
          </div>
        )}
        <div
          className={`column ${
            gridView ? "is-full" : "is-6-desktop is-10-mobile"
          }`}
        >
          <div className="columns is-gapless">
            <div className="column mt-10">
              <div className="columns is-mobile">
                <div
                  className={`column is-1 ${
                    listView &&  "is-hidden-desktop is-hidden-tablet is-1"
                  }`}
                >
                  <button
                    className={`icon-button button__vote-grid mt-10 m0`}
                    aria-label={`${
                      positiveImage ? "thumbs up" : "thumbs down"
                    }`}
                  >
                    <img
                      src={`assets/img/${
                        positiveImage ? "thumbs-up.svg" : "thumbs-down.svg"
                      }`}
                      alt="thumbs down"
                    />
                  </button>
                </div>
                <div className="column">
                  <p className="card__title">{name}</p>
                </div>
              </div>
              <div className="columns is-gapless">
                {gridView && (
                  <div className={`column ${gridView ? "is-1" : "is-2"}`}></div>
                )}
                <div className="column is-offset-2-mobile">
                  <p className="card__description">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column mt-10">
          <VoteOption {...props} gridView={gridView} />
        </div>
      </div>
      <div className="columns is-gapless card__results-container">
        <div className="column is-flex card__results-resume">
          <div
            className={`align-right card__winner card__results-statics ${
              gridView && "card__results-statics-grid"
            } is-vcentered`}
            style={{ width: `${porcentPositive}%`, paddingLeft: 20 }}
          >
            <div className="card__icon-bar">
              <img
                src="assets/img/thumbs-up.svg"
                width="30px"
                style={{ paddingRight: 10 }}
                alt="Positive vote"
              />
              {`${porcentPositive}%`}
            </div>
          </div>
          <div
            className={`align-left card__loser card__results-statics ${
              gridView && "card__results-statics-grid"
            } is-vcentered`}
            style={{ width: `${porcentNegative}%`, paddingRight: 20 }}
          >
            <div className="card__icon-bar">
              {`${porcentNegative}%`}
              <img
                src="assets/img/thumbs-down.svg"
                alt="Negative vote"
                width="30px"
                style={{ paddingLeft: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
