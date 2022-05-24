import { DialogRef } from '@angular/cdk-experimental/dialog';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService,  
    private dialogRef: DialogRef<MenuComponent>) {}

  ngOnInit(): void {
    this.authService.getProfile().subscribe(res => {
      this.user = res;
    });
  }
  
  close(resolve: boolean): void {
    this.dialogRef.close(resolve);
  }
}