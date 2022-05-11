import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk-experimental/dialog';
import {DialogService} from "../../../services/dialog.service";
import {RegisterModalComponent} from "../register-modal/register-modal.component";

interface DialogData {
  name: string;
}

@Component({
  selector: 'app-sign-modal',
  templateUrl: 'sign-modal.component.html',
  styleUrls: ['sign-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignModalComponent implements OnInit {

  constructor(
    private dialogRef: DialogRef<SignModalComponent>,
    private dialog: DialogService,
    @Optional() @Inject(DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
    console.log(this.data);

  }

  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
  openActionDialog() {
    const dialog = this.dialog.openDialog(RegisterModalComponent, {
      data: {
        name: 'Иван Иванович'
      },
    });

    dialog.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

}
