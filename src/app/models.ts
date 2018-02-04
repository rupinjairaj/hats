export class ListContainers {
    id: string
    names: string[]
    image: string
    imageId: string
    command: string
    ports: Port[]
    state: string
    status: string
    toggle: boolean
}

export class Port {
    ip: string
    privatePort: number
    publicPort: number
    type: string
}

export class StartContainer {
    id: string
    checkpointId: string
    checkpointDir: string
}

export class StopContainer {
    id: string
    duration: 0
}

export class ResponseMessage {
    source: string
    isSuccess: string
    message: string
}
// export class ContainerStates {
//     created: boolean = false
//     restarting: boolean = false
//     running: boolean = true
//     paused: boolean = false
//     exited: boolean = false
//     dead: boolean = false
// }