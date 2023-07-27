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

// via: https://stackoverflow.com/a/8537635
// writing assignment: What's going on here?
export const sorter = (prop, ascending) => {
    if(!ascending) return (a, b) => a[prop] === b[prop] ? 0 : a[prop] > b[prop] ? -1 : 1
    return (a, b) => a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1
}