export const trimTaskTitle = (title, length = 25) => {
    if(title.length > length) return title.slice(0, length).trim() + '...'
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

export const dummyTask = {title: '', time: null, cadence: 1}