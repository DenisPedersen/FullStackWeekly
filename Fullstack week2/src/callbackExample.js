const userLeft = false
const userWatchingCatMeme = false


function watchTutorialPromise () {
    return new Promise((resolve, reject)=> {
        if(userLeft) {
            reject( {
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: ':)'
            })
        }else {
            resolve('Wohoo!')
        }
    })
    
}

watchTutorialPromise().then((message) => {
    console.log('Success' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})

//Scroll down for callback

/* const userLeft = true
const userWatchingCatMeme = false
function watchTutorialCallback (callback, errorCallback) {
    if(userLeft) {
        errorCallback( {
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: ':)'
        })
    }else {
        callback('Wohoo!')
    }
}

watchTutorialCallback ((message) => {
    console.log('Success' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
}) */