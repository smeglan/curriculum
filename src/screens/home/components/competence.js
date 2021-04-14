import { faCircle as faCircleAlt } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Competence = (props) =>{
    const { title, points = 1, variant="" } = props;
    const style = variant === "light" ? styleLight : styleDark
    const iterations = new Array(5).fill(0);
    return (
        <div>
            <label style={style.text}>{title}</label>
            {iterations.map((value, i)=>{
                if(i<points){
                    return <FontAwesomeIcon key={"key"+i} style={styles.dot} color={style.dotColor} icon={faCircleSolid} />
                }else{
                    return <FontAwesomeIcon key={"key"+i} style={styles.dot} color={style.dotColor} icon={faCircleAlt} />
                }
            })}
        </div>
    )
}

const styleDark = {
    button: {
        variant: "outline-dark"
    },
    text: {
        color: "black"
    },
    dotColor: "black"
}

const styleLight = {
    button: {
        variant: "outline-light"
    },
    text: {
        color: "#E8E8E8"
    },
    dotColor: "#E8E8E8"
}

const styles = {
    dot : {
        marginRight: 2
    }
}