import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FooterModule } from '../footer/footer.module';
import { HelloWorldService } from '../../services/hello-world.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'Teste';
  catUrl = 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg';
  counter = 0;
  lista = ['maçã', 'banana', 'goiaba'];

  constructor(private service: HelloWorldService) {
    this.service.getHelloWorld().subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log('Fim request');
      }
    });
  }

  setCounter(value: number) {
    this.counter = value;
  }

  teste() {
    this.counter += 1;
    this.name = "Oi"+this.counter;
  }
}