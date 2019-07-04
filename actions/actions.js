export const ADD_POLL = 'ADD_POLL'
export const VOTE_POLL = 'VOTE_POLL'

export const GET_API_POSTS = 'GET_API_POSTS'
export const GET_API_POSTS_SUCCESS = 'GET_API_POSTS_SUCCESS'
export const GET_API_POSTS_FAIL = 'GET_API_POSTS_FAIL'

export function grabPostsFromAPI() {
  return {
    type: GET_API_POSTS,
    payload: {
      request: {
        url: `/posts?_start=0&_limit=5`
      }
    }
  }
}

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
