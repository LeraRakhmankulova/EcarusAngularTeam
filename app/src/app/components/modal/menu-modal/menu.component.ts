import { DialogRef } from '@angular/cdk-experimental/dialog';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from '@services/auth.service';
import { DialogService } from '@services/dialog.service';
import { SignModalComponent } from '../sign-modal/sign-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  user: any;

  constructor(public authService: AuthService,  
    private dialogRef: DialogRef<MenuComponent>,
    private dialog: DialogService) {
    }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(res => {
      this.user = res;
    });
  }
  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
  openActionDialog() {
    const dialog = this.dialog.openDialog(SignModalComponent, {
      data: {
        name: 'Иван Иванович'
      },
    })
  }
}