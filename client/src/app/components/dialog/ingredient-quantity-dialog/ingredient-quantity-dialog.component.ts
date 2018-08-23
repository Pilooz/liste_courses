import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-ingredient-quantity-dialog',
  templateUrl: './ingredient-quantity-dialog.component.html',
  styleUrls: ['./ingredient-quantity-dialog.component.css']
})
export class IngredientQuantityDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<IngredientQuantityDialogComponent>
  ) {
    this.data = this.data;
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

  onOkClick(): void {
    this.dialogRef.close(this.data.ingredient.quantity);
  }
}
