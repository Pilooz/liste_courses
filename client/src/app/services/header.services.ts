import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

    private _doReturn: Function;
    private _showHome: boolean = false;

    constructor() {
    }

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
}
