import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../../movie.model';
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css'],
  imports: [CommonModule,FormsModule] ,
  standalone: true,

})
export class ManagerDashboardComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }
  updateTotalTickets(_movieId: number, newTotal: number): void {
    console.log(this.movies,_movieId,newTotal)
    this.movieService.updateMovie(_movieId, newTotal)
      .subscribe(updatedMovie => {
        const index = this.movies.findIndex(movie => movie._id === updatedMovie._id);
        if (index !== -1) {
          this.movies[index] = updatedMovie;
        }
      });
  }

}
