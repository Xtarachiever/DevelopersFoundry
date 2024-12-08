document.addEventListener('DOMContentLoaded',()=>{
    const hamburgers = document.querySelector('.hamburgers');
    const secondHamburger = document.querySelector('.second_hamburger');
    const firstHamburger  = document.querySelector('.first_hamburger');
    const thirdHamburger  = document.querySelector('.third_hamburger');
    const dropDown  = document.querySelector('.dropdown');
    dropDown.classList.add('hidden');
    hamburgers.addEventListener('click',()=>{
        if(secondHamburger.classList.contains('hidden')){
            secondHamburger.classList.replace('hidden','block');
            firstHamburger.classList.remove('rotate-45');
            thirdHamburger.classList.remove('-rotate-45', '-mt-[2px]')
            thirdHamburger.classList.add('mt-1');
            dropDown.classList.replace('block','hidden')
        }else{
            secondHamburger.classList.replace('block','hidden');
            firstHamburger.classList.add('rotate-45');
            thirdHamburger.classList.add('-rotate-45', '-mt-[2px]')
            thirdHamburger.classList.remove('mt-1');
            dropDown.classList.replace('hidden','block')
        }
    })
})