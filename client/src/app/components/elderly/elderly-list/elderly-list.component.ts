import { Component, OnInit, Input } from '@angular/core';
import { ElderlyClass } from '../../../domain/elderly.class';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';
import * as _ from 'lodash';
import { ElderlyService } from '../../../services/elderly.service';

@Component({
  selector: 'app-elderly-list',
  templateUrl: './elderly-list.component.html',
  styleUrls: ['./elderly-list.component.css']
})
export class ElderlyListComponent implements OnInit {

  @Input() public elderlies: ElderlyClass[] = [];

  constructor(private dialog: MatDialog,
    private elderlyService: ElderlyService) { }

  ngOnInit() {
  }

  public delete(elderly: ElderlyClass) {
    this.dialog.open(DialogComponent, {
      width: '350px',
      panelClass: 'dialog',
      data: {
        title: 'Suppression',
        body: `Voulez-vous vraiment supprimer ${elderly.firstname} ${elderly.lastname} ?`
      }
    }).afterClosed().subscribe((res) => {
      if (!res) {
        return;
      }
      this.elderlyService.delete(elderly.id).subscribe(() => _.remove(this.elderlies, { id: elderly.id }));
    });
  }

}
