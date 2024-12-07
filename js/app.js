/*
I made everthing i think i should make ,please if it need to modifiy , said to me what is that , 
if there is a point need optimization say to me what is that , and if you can said to me how i can optimze my code.
i think this is my best .
*/


/**
 * Define Global Variables
 * 
*/
const navBarElement = document.getElementById('navbar__list');
const sectionsElemets = document.querySelectorAll('section');
const navLinksActive = document.querySelectorAll('.menu__link');


// build the nav,here is i create the nav bar and then append it to the documnet 
const createNav = ()=>{
    const t0 = performance.now();
    const fragment = document.createDocumentFragment();
    sectionsElemets.forEach(sec => {
        const secID = sec.id;
        const secData = sec.dataset.nav;
        const list = document.createElement('li');
        list.innerHTML = `<a href='#${secID}' data-nav='${secID}'>${secData}</a>`
        list.classList.add('menu__link');
        fragment.appendChild(list);
        const t1 = performance.now();
        console.log(`the excuttion take ${t1-t0} miliseconds `);
        
    });
    navBarElement.appendChild(fragment);

}
//this is the involation function to create the nav bar 
createNav();

// Add class 'active' to section when near top of viewport
const addActiveClass = ()=>{
    const t0 = performance.now();

        sectionsElemets.forEach((section,index)=>{
            const offset1 = Math.floor(section.getBoundingClientRect().top);
            const navlink = navBarElement.querySelector(`[data-nav="${section.id}"]`);
            section.classList.remove('your-active-class');
            navlink.classList.remove('active-link');
            section.style.backgroundColor='';
            section.style.backgroundColor = '';
            if(offset1<150 && offset1>-150){
                section.classList.add('your-active-class');
                navlink.classList.add('active-link');
            }

        })
        const t1 = performance.now();
        console.log(`the excuttion take ${t1-t0} miliseconds `);

    }

    let throttleTimeout;
    window.addEventListener('scroll', () => {
        if (!throttleTimeout) {
            throttleTimeout = setTimeout(() => {
                addActiveClass();
                throttleTimeout = null;
            }, 100); // Adjust the delay as needed
        }
    });
    


// Scroll to anchor ID using scrollTO event
navBarElement.addEventListener('click',(event)=>{
event.preventDefault();
const targetnav = event.target.dataset.nav;
if(targetnav){
    document.getElementById(targetnav).scrollIntoView({behavior:"smooth"});
    setTimeout(()=>{
        location.hash = targetnav;
    },100);
}

})
