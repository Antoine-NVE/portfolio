import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Project } from '../models/Project';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private url = 'assets/api/projects.json';

    constructor(private http: HttpClient) {}

    public getProjects(): Observable<Project[]> {
        return this.http
            .get<Project[]>(this.url)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage: string;
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
            errorMessage = `An error occurred: ${error.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `,
                error.error
            );
            errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
        }
        // Return an observable with a user-facing error message.
        return throwError(
            () =>
                new Error(
                    'Something bad happened; please try again later.' +
                        '\n' +
                        errorMessage
                )
        );
    }
}
