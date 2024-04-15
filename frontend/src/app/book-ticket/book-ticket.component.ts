import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-book-ticket',

  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {
  movies:[]=[]
  movieId: string ='hi';
  seatNumber: number=0;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ngOnInit() {

    
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.movieId = params['id'];
        
      }
    );
  }
  bookTickets(): void {
    
      
      seatNumber:this.seatNumber
    console.log(this.movieId,this.seatNumber)

    // Call your movie service to book tickets
    this.movieService.bookTickets(this.movieId,this.seatNumber).subscribe(response => {
      // Handle response from backend
      console.log(response);
    });
  }
}
