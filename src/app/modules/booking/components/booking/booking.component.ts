import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingsService } from '../../../../core/services/bookings.service';
import { ModalService } from '../../../../core/services/modal.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  formBooking: FormGroup;
  items: any = [];
  minDate: Date;
  maxDate: Date;
  patternEmail: string;

  constructor(
    private fb: FormBuilder,
    private service: BookingsService,
    private modal: ModalService
  ) {
    this.formBooking = new FormGroup({});
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getDate() + 1);
    this.minDate = new Date();
    this.minDate.setMonth(this.minDate.getMonth() - 11);
    this.patternEmail = '^[a-z0-9._%+-]+@(hotmail).[a-z]{2,4}$';
  }

  ngOnInit(): void {
    this.creatForm(), this.getCountries();
  }

  creatForm() {
    this.formBooking = this.fb.group({
      date: [],
      name: [],
      mail: [],
      country: [],
    });
  }

  onSubmit() {}

  getCountries() {
    this.service.getCountries().subscribe(
      (res: any) => {
        let countries = Object.keys(res.data);
        for (let i = 0; i < countries.length; i++) {
          /*  debugger  */
          let country = countries[i];
          this.items.push(res.data[country].country);
        }
        console.log(this.items);
      },
      error => console.log(error)
    );
  }

  modalValidation() {
    if (
      !this.formBooking.value.mail ||
      !this.formBooking.value.name ||
      !this.formBooking.value.date ||
      !this.formBooking.value.country
    ) {
      console.log('disabled button: please complete the required information');
      /* alert('Please complete the required information'); */
    } else {
      if (
        /^[a-z0-9._%+-]+@(hotmail|gmail)\.[a-z]{2,4}$/.test(
          this.formBooking.value.mail
        )
      ) {
        this.modal.openBookingModal(this.formBooking.value);
      } else alert('Only hotmail and gmail e-mail clients are allowed');
    }
  }

  show() {
    this.modalValidation();
  }

  get form1() {
    return this.formBooking;
  }
}
