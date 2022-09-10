import { Injectable } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenBookingModalComponent } from '../../shared/components/open-booking-modal/open-booking-modal.component';

@Injectable({
  providedIn: 'root',
})

/** Inicia la clase ModalService.
 *
 * El constructor utiliza la propiedad privada activeModal, que se extiende de la clase NgbModal para poder mostrar un modal con la información que se le asigne.
 *
 * Implementa el método openBookingModal(), que RETORNA la constante modal del tipo clase ngbModalRef.
 *
 * PARAMS: rol tipo string; password tipo string.
 *
 * Se le envía el objeto data al endpoint para regresar determinado resultado
 * Sirve para extraer los valores de rol y login para iniciar sesión en localStorage.
 *
 * Exporta la clase ModalService*/
export class ModalService {
  constructor(public activeModal: NgbModal) {}

  openBookingModal(data: object) {
    const modal = this.activeModal.open(OpenBookingModalComponent, {
      centered: true,
      size: 'md',
      windowClass: 'my-class',
    });
    modal.componentInstance.data = data;
    return modal;
  }
}
