import { Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenBookingModalComponent } from '../../shared/components/open-booking-modal/open-booking-modal.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public activeModal: NgbModal) {}

  openBookingModal(data: any) {
    const modal = this.activeModal.open(OpenBookingModalComponent, {
      centered: true,
      size: 'md',
      windowClass: 'my-class',
    });
    modal.componentInstance.data = data;
    return modal;
  }
}
