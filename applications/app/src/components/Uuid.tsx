import { v4 as uuidv4 } from 'uuid';

const Uuid = ()=>{
    return (
        <div style={{color: 'red'}}>UUID - {uuidv4()}</div>
    )
}

export {Uuid}