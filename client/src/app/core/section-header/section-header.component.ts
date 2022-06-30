import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from 'ng8-breadcrumb';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  breadcrumb$ : Observable<any[]> = new Observable();

  constructor(private bcService : BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumb$ = this.bcService.breadcrumbs$;
    console.log(this.breadcrumb$);
  }

}
