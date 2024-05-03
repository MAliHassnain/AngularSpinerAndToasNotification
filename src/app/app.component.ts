import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingIndicatorService } from './services/loading-indicator.service';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spinner and Alert Notification';

  loading: boolean = false;

  constructor(
    private http: HttpClient,
    private loadingIndicatorService: LoadingIndicatorService,
    private alertSvc: AlertService
  ) {
    this.loadingIndicatorService.onLoadingChanged.subscribe(
      (isLoading) => (this.loading = isLoading)
    );
  }

  loaderTest() {
    for (let i = 0; i < 100; i++) {
      this.http
        .get(`https://jsonplaceholder.typicode.com/posts/${i}`)
        .subscribe(
          (post) => {
            //success
          },
          (error) => {
            //error
          }
        );
    }
  }

  showSuccess() {
    this.alertSvc.showSuccess('Hello world!');
  }

  showError() {
    this.alertSvc.showError('Hello world!');
  }
}
