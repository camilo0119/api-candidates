import { db } from "../firebase/firebase-config";
import { types } from "../types/types";

export const registerCandidate = (candidate) => {
    return async (dispatch) => {
        await db.collection(`candidates`).add(candidate).then((e) => {
            console.log(e)
        }).catch(e => {
            console.error(e)
        })
    }
}

export const updateCandidate = (id, candidate) => {
    return async (dispatch) => {
        await db.collection(`candidates`)
            .doc(id)
            .update(candidate)
            .then((e) => {
            console.log(e)
        }).catch(e => {
            console.error(e)
        })
    }
}

export const loadCandidates = (uid) => {
    return async (dispatch) => {
        const candidatesSnap = await db.collection(`candidates`).get();
        const candidatesList = [];
        candidatesSnap.forEach(candidate => {
            candidatesList.push({
                id: candidate.id,
                ...candidate.data()
            })
        })
        console.log(candidatesList)
        dispatch(setCandidates(candidatesList))
    }
}

export const setCandidates = (candidates) => {
    return {
        type: types.saveCandidate,
        payload: candidates
    }
}