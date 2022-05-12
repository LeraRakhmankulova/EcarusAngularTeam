import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../../../services/toast.service';
import {AuthService} from '../../../services/auth.service';
import {DialogService} from "../../../services/dialog.service";
import {RegisterModalComponent} from "../register-modal/register-modal.component";
import {SignCompanyModalComponent} from "../sign-company-modal/sign-company-modal.component";

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
  Form: FormGroup;

  constructor(
    private dialogRef: DialogRef<SignModalComponent>,
    private dialog: DialogService,
    private fb: FormBuilder,
    private toast: ToastService,
    private authService: AuthService,
    @Optional() @Inject(DIALOG_DATA) public data: DialogData,
  ) {
    this.Form = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: 'USER'
    });
    // this.Form.markAllAsTouched();
  }

  ngOnInit() {
  }
  login(): void {
    if (!this.Form.valid) {
      this.toast.error('Заполните все поля!');
      return;
    }

    this.authService.authorize(this.Form.value).subscribe(res => {
      this.toast.success('Добро пожаловать');
      this.authService.token = res.token;
    }, err => {
      console.log(err);
    })
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
  }
  openActionOtherDialog() {
    const dialog = this.dialog.openDialog(SignCompanyModalComponent, {
      data: {
        name: 'Иван Иванович'
      },
    });
  }
  control(name: string) {
    return this.Form.get(name);
  }
}
