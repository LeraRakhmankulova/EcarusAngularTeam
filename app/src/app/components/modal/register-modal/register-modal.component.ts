import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk-experimental/dialog';

interface DialogData {
  name: string;
}

@Component({
  selector: 'app-register-modal',
  templateUrl: 'register-modal.component.html',
  styleUrls: ['register-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterModalComponent implements OnInit {

  constructor(
    private dialogRef: DialogRef<RegisterModalComponent>,
    @Optional() @Inject(DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit(): void {
    console.log(this.data);

  }

  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }

}
