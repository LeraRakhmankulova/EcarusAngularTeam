import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MenuComponent} from '@components/modal/modal-content/menu-modal/menu.component';
import {DialogService} from "@services/dialog.service";
import {SignModalComponent} from "../modal/modal-content/sign-modal/sign-modal.component";
import {AuthService} from '@services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit {
  user: any;
  constructor(private dialog: DialogService,
              public authService: AuthService,
              private route: Router) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe(res => {
      this.user = res;
    });
  }

  openSimpleDialog() {
    this.dialog.openDialog(SignModalComponent);
  }

  openActionDialog() {
    const dialog = this.dialog.openDialog(SignModalComponent, {
      data: {
        name: 'Иван Иванович'
      },
    });

    dialog.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }

  openProfile() {
    this.route.navigate(['/profile'])
  }
  closeProfile(){
    this.route.navigate(['/'])
  }
  openMenu() {
    this.dialog.openMobileModal(MenuComponent)
  }
}
