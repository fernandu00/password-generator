const rangeValue = document.getElementById('range-value')
const value = document.getElementById('value')
const generated = document.getElementById('generated')
const btn = document.getElementById('new-passwd')
const btnCopy = document.querySelector('.btn-copy')
const result = document.getElementById('result')

const chars = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','!','@','#','$','%','&','*','(',')','-','_','=','+','?','/','>','<',':',';']

let passLength = 0


rangeValue.addEventListener('change', function(){
    value.innerText = this.value + ' Chars'
})

function randomChar(){
    return Math.floor(Math.random() * chars.length)
}

function generatePasswd(){
    passLength = rangeValue.value
    let passwdGenerated = ""
    for(i = 0;i < passLength;i++){
        passwdGenerated += chars[randomChar()]
    }
    result.value = passwdGenerated
    btnCopy.classList.add('visible')
}

btnCopy.addEventListener('click', function(){
    navigator.clipboard.writeText(result.value).then( ()=>{
        alert('Password Copied: ' + result.value)
    })
        

    
})





