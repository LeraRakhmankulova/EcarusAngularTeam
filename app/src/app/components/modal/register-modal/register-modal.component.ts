import {ChangeDetectionStrategy, Component, Inject, OnInit, Optional} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk-experimental/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '../../../services/toast.service';
import {AuthService} from '../../../services/auth.service';
import {DialogService} from "../../../services/dialog.service";
import {SignModalComponent} from "../sign-modal/sign-modal.component";
import {SignCompanyModalComponent} from "../sign-company-modal/sign-company-modal.component";

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
  regForm: FormGroup;
  constructor(
    private dialogRef: DialogRef<RegisterModalComponent>,
    private dialog: DialogService,
    private fb: FormBuilder,
    private toast: ToastService,
    private authService: AuthService,
    @Optional() @Inject(DIALOG_DATA) public data: DialogData,
  ) {
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      phone_number: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      role: 'USER'
    });
  }

  ngOnInit() {

  }

  registration(): void {
    if (!this.regForm.valid) {
      this.toast.error('Заполните все поля!');
      return;
    }

    this.authService.registration(this.regForm.value).subscribe(res => {
      this.toast.success('Регистрация прошла успешно');
    }, err => {
      this.toast.error('Такой пользователь уже существует');
    });
  }

  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }

  openActionDialog() {
    const dialog = this.dialog.openDialog(SignModalComponent, {
    });
  }
  openActionOtherDialog() {
    const dialog = this.dialog.openDialog(SignCompanyModalComponent, {
    });
  }
  control(name: string) {
    return this.regForm.get(name);
  }
}
