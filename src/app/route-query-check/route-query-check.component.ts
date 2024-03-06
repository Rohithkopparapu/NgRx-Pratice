import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-query-check',
  templateUrl: './route-query-check.component.html',
  styleUrls: ['./route-query-check.component.css']
})
export class RouteQueryCheckComponent implements OnInit {
 editBlog:number = 0;
 constructor(private router:ActivatedRoute){}
 ngOnInit(): void {
  this.editBlog=parseInt(this.router.snapshot.paramMap.get('id')!);
 }
}
