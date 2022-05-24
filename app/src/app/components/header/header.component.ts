import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { MenuComponent } from '@components/modal/menu-modal/menu.component';
import {DialogService} from "../../services/dialog.service";
import {SignModalComponent} from "../modal/sign-modal/sign-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HeaderComponent implements OnInit{
  constructor(private dialog: DialogService) {
  }
  ngOnInit(): void {
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
  openMenu() {
		this.dialog.openMobileModal(MenuComponent)
	}

}
