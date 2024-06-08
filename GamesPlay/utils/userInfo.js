function getUserObj () {
    return JSON.parse(sessionStorage.getItem('game-use'))
}

function getToken () {
    if(getUserObj()) {
        return getUserObj().accessToken
    }

    return null
} 

export const userInfo={
    getUserObj,
    getToken
}