export default interface Car {
    id: number,
    model: string, 
    engine: number,                     //0-100
    aero: number,                       //0-100
    reliability: number                 //0-100
}

export default interface Driver {
    id: number,
    name: string,
    skill: number,                      //0-100
    speed: number,                      //0-100
    corners: number,                    //0-100
}

export default interface Team {
    id: number,
    name: string,
    budget: number                      //0-100
}

export default interface Track {
    id: number,
    name: string,
}

