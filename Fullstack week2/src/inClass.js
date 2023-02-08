const superagent = require('superagent')
const fs = require("fs")
const { log } = require('console')
const { resolve } = require('path')
const { get } = require('https')

//CALLBACK-HELL
/* fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data)=> {
    console.log(data)
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .end((err, res) => {
            if(err) return console.log(err)
            returned_image = res.body.message
            console.log(res.body.message)
            
            fs.writeFile('dog.img.txt', returned_image, err=> {
                if(err) return console.log(err)
                console.log('Dog image saved to file!')
            })
        })
}) */

//THEN SYNTAX
/*  fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data)=> {
    superagent
        .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
        .then(res => {
            returned_image = res.body.message
            console.log(res.body.message)
            
            fs.writeFile('dog.img.txt', returned_image, err=> {
                if(err) return console.log(err)
                console.log('Dog image saved to file!')
        })
        })
        .catch(err => console.log('Error', err.message))
}) */

//PROMISES

const readFilePro = (file) => {
    //executor function
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if(err) reject("Error:" + err)
            resolve(data)
        })
    })
}

const writeFilePro = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('file_name.txt',data,  err=> {
            if(err) reject("Error " + err)
            resolve("Data saved")
        })
    })
}

/* readFilePro(`${__dirname}/dog.txt`).then(data => 
    superagent
    .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
    .then(res => writeFilePro(res.body.message))
    .then(res =>  console.log(res))
    .catch(err => console.log(err))
    .finally(()=> console.log('DONE!')),
)
 */
//ASYNCH AWAIT
/* const getDogPics = async () => {
    try {
    const data = await readFilePro(`${__dirname}/dog.txt`)
    const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
    const text = await writeFilePro(res.body.message)
    return text
    console.log(text)
    }catch(e) {
        throw new Error(e.message)
    }
} */


//IFFI IMMEDIATELY INVOED FUNCTION EXPRESSION
/* 
(async () => {
    try{
    const data = await getDogPics()
    console.log(data)
    } catch(e) {
        console.log(e)
    }
})()  */

//WAITING FOR MULTIPLE PROMISES
const getDogPics = async () => {
    try {
    const data = await readFilePro(`${__dirname}/dog.txt`)
    const res = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
    const res1 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
    const res2 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)

    const all = await Promise.all([res, res2, res1])
    const images = all.map(el => el.body.message)
    console.log(images)

    const text = await writeFilePro(images.join("\n"))
    return text 
    
    }catch(e) {
        throw new Error(e.message)
    }
}
getDogPics()