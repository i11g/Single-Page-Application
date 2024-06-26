function getLoginUrl() {
    return 'http://localhost:3030/users/login'
  }

function getRegisterUrl() {
  return 'http://localhost:3030/users/register'
}

function getLogoutUrl() {
     return 'http://localhost:3030/users/logout'
}

function getBaseUrl() {
    return 'http://localhost:3030'
}

function getGamesUrl() {
    return `${getBaseUrl()}/data/games?sortBy=_createdOn%20desc&distinct=category`
}

function encodeURL() {
    return encodeURL(url)
} 

export const url= {
    getLoginUrl,
    getRegisterUrl,
    getLogoutUrl,
    getBaseUrl,
    getGamesUrl,
    encodeURL
}