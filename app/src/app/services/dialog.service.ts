import { Injectable, TemplateRef } from '@angular/core';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import { ModalContainerComponent } from '@components/modal/modal-containers/modal-container/modal-container.component';
import { ComponentType } from '@angular/cdk/overlay';
import { BottomSheetComponent } from '@components/modal/modal-containers/bottom-sheet/bottom-sheet.component';
import { SideBarComponent } from '@components/modal/modal-containers/side-bar-modal/side-bar.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
	constructor(private dialog: Dialog) {}

	openFromTemplate<T>(template: TemplateRef<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
		return this.dialog.openFromTemplate(template, {
			maxWidth: 'none',
			...config,
			containerComponent: ModalContainerComponent,
		});
	}
	openMobileModal<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<SideBarComponent> {
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			...config,
			containerComponent: SideBarComponent,
		});
	}
	openDialog<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			...config,
			containerComponent: ModalContainerComponent,
		});
	}
	openBottomSheet<T>(component: ComponentType<T>, config: DialogConfig = {}): DialogRef<BottomSheetComponent> {
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			...config,
			containerComponent: BottomSheetComponent,
		});
	}
}
