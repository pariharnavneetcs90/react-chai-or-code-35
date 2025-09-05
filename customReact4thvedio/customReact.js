function customeRender(reactE,container){ //6th
    const domE = document.createElement(reactE.type)
    domE.innerHTML = reactE.children
    domE.setAttribute('href' , reactElement.props.href)
    domE.setAttribute('target' , reactE.props.target)

    container.appendChild(domE)
}

// FUNTION ME HTML HAI VO REACT KO KASA DHIKTA HAI //4TH 
//REACT TREE BANANE KI KOSISIH KARTA HAI 
const reactElement = {
    // ANCORE TAG REACT CASE DHEKTA HAI 
    type : 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children: 'click me to visit google'
}

const mainConatiner = document.querySelector('#jad') // 3 RD 

customeRender(reactElement , mainConatiner ) // 5th