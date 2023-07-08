export const trimTaskTitle = (title) => {
    if(title.length > 25) return title.slice(0, 25).trim() + '...'
    return title;
}

export const formatTime = (time) => {
    if(time === 1) return time + ' minute'
    return time  + ' minutes'
}

export const getPseudoRandom = (max) => {
    return Math.floor(Math.random() * max)
}