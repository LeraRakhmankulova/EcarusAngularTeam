import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk-experimental/dialog";
import {DialogService} from "@services/dialog.service";
import {FormBuilder} from "@angular/forms";
import {ToastService} from "@services/toast.service";
import {AuthService} from "@services/auth.service";
import {SignModalComponent} from "@components/modal/sign-modal/sign-modal.component";

@Component({
  selector: 'app-profil',
  templateUrl: './ProfilPage.component.html',
  styleUrls: ['./ProfilPage.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit {
  public user = {email: 'email', phone_number: 'phone_number'};

  constructor(
    private dialog: DialogService,
    private fb: FormBuilder,
    private toast: ToastService,
    private authService: AuthService) {
  }

  getProfile(): void {
    this.authService.getProfile().subscribe(res => {
      console.log(res)
      this.user = {email: res.email, phone_number: res.phone_number};
    })
  }

  ngOnInit(): void {
    this.getProfile()
  }
}
