import React, { useState } from 'react';

function Paralax(props) {
    const body = document.body
    const innerContent = props.children
    const { power, reverse, centered } = props

    const [style, setStyle] = useState({
        left: 0 + 'px',
        top: 0 + 'px',
        position: 'absolute'
    })
    const paralaxStyle = {
        position: 'relative'
    }

    const styleContainer = <div style={{ position: 'absolute' }}>{style.left + ':' + style.top}</div>
    const paralaxWrapper = <div className='paralax' style={paralaxStyle}><div className='paralax-content' style={style} >{styleContainer}{innerContent}</div></div>

    const handleParalax = (event) => {

        const parent = body.querySelector('.paralax-list')
        const target = centered ? body : body.querySelector('.paralax')

        const centerHorizontal = (target.clientHeight / 2) + target.offsetTop
        const centerVertival = (target.clientWidth / 2) + target.offsetLeft
        const offsetVertical = Math.floor((event.clientX - centerVertival) / (20 / (power || 1))) * (reverse ? -1 : 1)
        const offsetHorizontal = Math.floor((event.clientY - centerHorizontal) / (20 / (power || 1))) * (reverse ? -1 : 1)

        setStyle({
            left: offsetVertical + 'px',
            top: offsetHorizontal + 'px',
            position: 'absolute'
        })

        if (parent) {
            parent.style.marginLeft = offsetVertical + 'px'
            parent.style.marginTop = offsetHorizontal + 'px'
        }
    }
    body.onmousemove = handleParalax

    return (paralaxWrapper)
}

function ParalaxList(props) {
    return (
        <div className='paralax-list'>
            {props.children}
        </div>
    )
}

export { Paralax, ParalaxList };