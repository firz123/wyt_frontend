export const ADD_POLL = 'ADD_POLL'
export const VOTE_POLL = 'VOTE_POLL'

export function addPoll(username, tag, content, votingOpts, profileImg) {
  return {
    type: ADD_POLL,
    username,
    tag,
    content,
    votingOpts,
    profileImg,
  }
}

export function votePoll(voterID, globalPollID, preview, voteOption, inc_dec) {
  return {
    type: VOTE_POLL,
    voterID,
    globalPollID,
    preview,
    voteOption,
    inc_dec,
  }
}
