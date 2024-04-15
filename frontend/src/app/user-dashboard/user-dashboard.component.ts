import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../../movie.model';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  imports: [CommonModule] ,
  standalone: true,
})
export class UserDashboardComponent implements OnInit{
  
  movies: Movie[] = [];
  constructor(private movieService: MovieService,private router: Router) { }
  ngOnInit(): void {
    this.fetchMovies();
  }
  fetchMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
  

  bookTicket(movieId:number) {
    // Implement add ticket logic
    
    this.router.navigate(['/book-ticket'],{ queryParams: { id: movieId } });
  }
}
