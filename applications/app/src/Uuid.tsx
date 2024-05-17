import { v4 as uuidv4 } from 'uuid';

const Uuid = ()=>{
    return (
        <div>UUID - {uuidv4()}</div>
    )
}

export {Uuid}