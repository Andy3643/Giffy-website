import { Component, OnInit } from '@angular/core';
import { GifserviceService } from '../gifservice.service';

@Component({
  selector: 'app-giftrends',
  templateUrl: './giftrends.component.html',
  styleUrls: ['./giftrends.component.css'],
  providers:[GifserviceService]
})
export class GiftrendsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
