import { Component } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'droneapp';
  faPlusCircle=faPlusCircle;
  lat = 40.678418;
  lng = 38.809007;

  onChoseLocation(event: any){
    console.log(event);
  }
}
