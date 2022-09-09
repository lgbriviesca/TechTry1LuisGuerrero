import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ShorterLinkService } from '../../../../core/services/shorter-link.service';

@Component({
  selector: 'app-shorterlink',
  templateUrl: './shorterlink.component.html',
  styleUrls: ['./shorterlink.component.css'],
})
export class ShorterlinkComponent implements OnInit {
  formShorterLink: FormGroup;
  items: any = [];

  constructor(
    private shortenLink: ShorterLinkService,
    private fb: FormBuilder
  ) {
    this.formShorterLink = new FormGroup({});
  }

  createForm() {
    this.formShorterLink = this.fb.group({
      url: ['', Validators.required],
    });
  }

  getItemsFromStorage() {
    const links = localStorage.getItem('links');
    if (links) {
      this.items = JSON.parse(links);
    }
  }

  onSubmit() {
    if (this.formShorterLink.valid) {
      this.shortenLink.shortenLink(this.formShorterLink.value.url).subscribe(
        (res: any) => {
          if (res.ok) {
            this.items.unshift({
              oURL: res.result.original_link,
              shURL: res.result.short_link,
            });
            localStorage.setItem('links', JSON.stringify(this.items));
          }
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  ngOnInit(): void {
    this.getItemsFromStorage();
    this.createForm();
  }
}
