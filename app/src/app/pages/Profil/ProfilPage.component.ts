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
  user: any;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(res => {
      this.user = res;
      // console.log(res);
    });
  }

}
