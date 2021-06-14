const colors ={
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    ul: '#5e35b1',
    ol: '#fbc02d',
    padrao: '#616161',
    getTag(tag){
        return this[tag] ? this[tag]:this.padrao
    }
}


document.querySelectorAll('.tag').forEach(box =>{
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colors.getTag(tagName)

    if(!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.getTag(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})