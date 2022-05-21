import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DialogRef} from "@angular/cdk-experimental/dialog";
import {DialogService} from "@services/dialog.service";
import {FormBuilder} from "@angular/forms";
import {ToastService} from "@services/toast.service";
import {AuthService} from "@services/auth.service";
import {User} from "@utils/local-storage";

@Component({
  selector: 'app-profil',
  templateUrl: './ProfilPage.component.html',
  styleUrls: ['./ProfilPage.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilComponent implements OnInit {
  constructor(
              private dialog: DialogService,
              private fb: FormBuilder,
              private toast: ToastService,
              private authService: AuthService) { }

  ngOnInit(): void {
  }
  getProfile(): void {
    this.authService.getProfile().subscribe(res => {
      console.log(res)
    });
  }
}
