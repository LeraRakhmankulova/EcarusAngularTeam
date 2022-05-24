import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthService} from "@services/auth.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(res => {
      this.user = res;
    });
  }
}
