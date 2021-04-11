export class UserModel {
    public userId: number;
    public username: string;
    public password: string;
    public name: string;
    public surname: string;
    public birthday: Date;
    public email: string;
    public upsertName: string;
    public constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}
export class RequestLoginModel {
    public username: string;
    public password: string;
    public constructor(init?: Partial<RequestLoginModel>) {
        Object.assign(this, init);
    }
}
export class ResponseLoginModel {
    public userId: number;
    public state: boolean;
    public message: string;
    public constructor(init?: Partial<ResponseLoginModel>) {
        Object.assign(this, init);
    }
}
export class ResponseModel {
    public state: boolean;
    public message: string;
    public constructor(init?: Partial<ResponseLoginModel>) {
        Object.assign(this, init);
    }
}
