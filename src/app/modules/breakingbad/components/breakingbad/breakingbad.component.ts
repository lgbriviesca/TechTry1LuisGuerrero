import { Component, OnInit } from '@angular/core';
import { BreakingbadService } from '../../../../core/services/breakingbad.service';

@Component({
  selector: 'app-breakingbad',
  templateUrl: './breakingbad.component.html',
  styleUrls: ['./breakingbad.component.css'],
})
export class BreakingbadComponent implements OnInit {
  id = 1;
  item = { name: '', quote: '' };

  constructor(private service: BreakingbadService) {}

  ngOnInit(): void {
    this.getQuote();
  }

  getQuote() {
    this.service.getQuotes(this.id).subscribe(
      (res: any) => {
        this.item.name = res[0].author;
        this.item.quote = res[0].quote;
      },
      error => console.error(error)
    );
  }

  next() {
    this.id++;
    this.getQuote();
  }
}
