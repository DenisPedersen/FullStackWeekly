function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if(location === 'Google') {
            resolve('This is Google')
        } else {
            reject('That was not Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject)=> {
        console.log('Processing response')
        reject(`Extra Information + ${response}`)
    })
}

async function doWork() {

    try {
    const response = await makeRequest('Googe')
    console.log('Response received')
    const processedResponse = await processRequest(response)
    console.log(processedResponse)
    }catch (error){
        console.log(error)
    }
}

doWork()





//scroll down for promises:


/* function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)
        if(location === 'Google') {
            resolve('This is Google')
        } else {
            reject('That was not Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject)=> {
        console.log('Processing response')
        reject(`Extra Information + ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log('Response received')
    return processRequest(response)
}).then(processedResponse=> {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
}) */