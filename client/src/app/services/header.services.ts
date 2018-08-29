import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

    private _doReturn: Function;
    private _showHome: boolean = false;
    private _showProfile: boolean = true;
    private _elderlyId: number;

    constructor() { }

    public get doReturn(): Function {
        return this._doReturn;
    }

    public set doReturn(doReturn: Function) {
        this._doReturn = doReturn;
    }

    public hideReturn() {
        this._doReturn = null;
    }

    public get showHome(): boolean {
        return this._showHome;
    }

    public set showHome(showHome: boolean) {
        this._showHome = showHome;
    }

    public get showProfile(): boolean {
        return this._showProfile;
    }

    public set showProfile(showProfile: boolean) {
        this._showProfile = showProfile;
    }

    public get elderlyId(): number {
        return this._elderlyId;
    }

    public set elderlyId(elderlyId: number) {
        this._elderlyId = elderlyId;
    }
}
