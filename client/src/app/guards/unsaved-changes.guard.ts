import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';

import { DialogComponent } from '../components/dialog/dialog.component';

/**
 * Guard to assert that the authenticated user is an admin. Otherwise redirect to user's home
 */
@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<Deactivable> {

    constructor(private dialog: MatDialog) { }

    canDeactivate(component: Deactivable): Observable<boolean> | Promise<boolean> | boolean {
        if (!component.canDeactivate()) {
            return this.dialog.open(DialogComponent, {
                width: '350px',
                panelClass: "dialog",
                data: {
                    title: 'Attention !',
                    body: 'Vous n\'avez pas enregistré vos dernières modifications. Voulez-vous vraiment quitter sans sauvegarder ? '
                }
            }).afterClosed();
        }
        return true;
    }

}
