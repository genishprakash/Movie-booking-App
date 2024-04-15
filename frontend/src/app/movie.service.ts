import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../movie.model'; // Assuming you have a Movie interface/model

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://localhost:5001/api/movies'; // Example API URL
  
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }
  
  updateMovie(movieId: number, newTotal: number): Observable<Movie> {
    const updateUrl = `${this.apiUrl}/${movieId}`;
    return this.http.put<Movie>(updateUrl, { tickets: newTotal });
  }
  bookTickets(movieId: String,remainingSeats:number): Observable<Movie> {
    const updateUrl = `${this.apiUrl}/${movieId}`;
    return this.http.put<Movie>(updateUrl, { tickets:remainingSeats});
  }
}
