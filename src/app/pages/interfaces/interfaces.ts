export interface IConductores{
    id: Number;
    nombre: String;
    password: String;
    patente: String;
    sede: String;
    jornada: String;
    email: String;

}


export interface Iconductor{
    nombre: String;
    password: String;
    patente: String;
    sede: String;
    jornada: String;
    email: String;
}

export interface Users{
    id: number;
    username: string;
    password: string;
    role: string;
    isactive: boolean
}