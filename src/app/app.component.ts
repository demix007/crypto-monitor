import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency : string = "USD";

  constructor(private currencyService : CurrencyService){

  }
  currencySymbols: { [key: string]: string } = {
    'USD': '$', // US Dollar symbol
    'NGN': '₦', // Nigerian Naira symbol
  };
  sendCurrency(event:string){
    console.log(event);
    this.currencyService.setCurrency(event);
  }

  getCurrencySymbol(): string {
    return this.currencySymbols[this.selectedCurrency];
  }
}
