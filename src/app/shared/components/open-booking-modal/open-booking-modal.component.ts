import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-booking-modal',
  templateUrl: './open-booking-modal.component.html',
  styleUrls: ['./open-booking-modal.component.css'],
})
export class OpenBookingModalComponent implements OnInit {
  @Input() data: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
