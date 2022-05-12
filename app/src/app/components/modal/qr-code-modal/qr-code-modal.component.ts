import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk-experimental/dialog';

interface DialogData {
  name: string;
}

@Component({
  selector: 'app-qr-code-modal',
  templateUrl: 'qr-code-modal.component.html',
  styleUrls: ['qr-code-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QRCodeModalComponent implements OnInit {

  constructor(
    private dialogRef: DialogRef<QRCodeModalComponent>,
    @Optional() @Inject(DIALOG_DATA) public data: DialogData,
  ) {
  }

  ngOnInit() {
  }

  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
}
