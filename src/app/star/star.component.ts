import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  //define que o star.component.html é o template do componente
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StartComponent implements OnChanges{

  @Input()
  rating: number = 0;
  starWidth: number;

  ngOnChanges(): void{
    this.starWidth = this.rating * 74 / 5;
  }
}
