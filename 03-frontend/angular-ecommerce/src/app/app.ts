import { HttpClientModule } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './services/product.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
  // imports: [BrowserModule, HttpClientModule],
  providers: [ProductService]  
})
export class App {
  protected readonly title = signal('angular-ecommerce');
}
