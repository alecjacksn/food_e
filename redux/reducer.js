const initialState = {
  user: "",
  
}

const TOKEN_FALSE = 'TOKEN_FALSE'



export function tokenFalse() {
  return {
    type: TOKEN_FALSE,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    

    default: return state;
  }

}










