import { faCircle as faCircleAlt } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

export const Competence = (props) =>{
    const { title, points = 1 } = props;
    const [records, setRecord] = useState([]);
    const drawPoints = () =>{
        const _records = [];
        for (let i = 0; i < 5; i++) {
            if(i<points){
                _records.push(<FontAwesomeIcon key={"key"+i} style={styles.dot} icon={faCircleSolid} />)
            }else{
                _records.push(<FontAwesomeIcon key={"key"+i} style={styles.dot} icon={faCircleAlt} />)
            }
        }
        setRecord(_records);
    }
    useEffect(() => {
        drawPoints();
    }, [title])
    return (
        <div>
            <label>{title}</label>
            {records.map((value,i) =>{
                return value
            })}
        </div>
    )
}

const styles = {
    dot : {
        marginRight: 2
    }
}