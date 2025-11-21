interface Car {
    id: number,
    model: string,
    engine: number,
    aero: number,
    reliability: number
}

interface Driver {
    id: number,
    name: string,
    skill: number,
    speed: number,
    corners: number,
}

interface Team {
    id: number,
    name: string,
    budget: number
}

interface Track {
    id: number,
    name: string,
}