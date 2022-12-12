const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const nums1 = document.querySelectorAll('.nums')

let currentactive = 1

next.addEventListener('click', () => {
    currentactive++

    
    if (currentactive > nums1.length) {
        currentactive = nums1.length
    }
    update()
})

prev.addEventListener('click',() =>{
    currentactive--
    if (currentactive < 1) {
        currentactive = 1
    }

    update()
})

function update() {
    nums1.forEach((nums, kuchbhi) =>{
        if (kuchbhi < currentactive) {
            nums.classList.add('active')
        }
        else {
            nums.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    progress.style.width=(actives.length - 1) / (nums1.length - 1) * 100 + '%'
    if (currentactive === 1) {
        prev.disabled = true
    }
    else if (currentactive === nums1.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false
        next.disabled = false
    }
}   
