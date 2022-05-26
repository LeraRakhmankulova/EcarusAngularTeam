import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from "@services/dialog.service";
import {RegisterCompanyModalComponent} from "../register-company-modal/register-company-modal.component";

interface DialogData {
  name: string;
}

@Component({
  selector: 'app-sign-company-modal',
  templateUrl: 'sign-company-modal.component.html',
  styleUrls: ['sign-company-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignCompanyModalComponent implements OnInit {
  Form: FormGroup;

  constructor(
    private dialogRef: DialogRef<SignCompanyModalComponent>,
    private dialog: DialogService,
    private fb: FormBuilder,
    @Optional() @Inject(DIALOG_DATA) public data: DialogData,
  ) {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: 'USER'
    });
  }

  ngOnInit() {
  }
  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }

  openActionDialog() {
    const dialog = this.dialog.openDialog(RegisterCompanyModalComponent, {
    });
  }
  control(name: string) {
    return this.Form.get(name);
  }
}
