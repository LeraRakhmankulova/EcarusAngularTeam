import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from "@services/dialog.service";
import {SignCompanyModalComponent} from "../sign-company-modal/sign-company-modal.component";

interface DialogData {
  name: string;
}

@Component({
  selector: 'app-register-company-modal',
  templateUrl: 'register-company-modal.component.html',
  styleUrls: ['register-company-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterCompanyModalComponent implements OnInit {
  regForm: FormGroup;
  constructor(
    private dialogRef: DialogRef<RegisterCompanyModalComponent>,
    private dialog: DialogService,
    private fb: FormBuilder,
    @Optional() @Inject(DIALOG_DATA) public data: DialogData,
  ) {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      name: ['', [Validators.required, Validators.minLength(4)]],
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
    const dialog = this.dialog.openDialog(SignCompanyModalComponent, {
    });
  }
  control(name: string) {
    return this.regForm.get(name);
  }
}
