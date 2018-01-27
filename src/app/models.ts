export class ListContainers {
    public static ID: string = ''
    public static Names: string[]
    public static Image: string
    public static ImageID: string
    public static Command: string
    public static Created: number
    public static Ports: Port[]
    public static SizeRw: number
    public static SizeRootFs: number
    // public static Labels     map[string]string
    public static State: string
    public static Status: string
    //     public static HostConfig struct {
    //     NetworkMode string`json:",omitempty"`
    // }
    // NetworkSettings * SummaryNetworkSettings
    // Mounts
}

export class Port {

}