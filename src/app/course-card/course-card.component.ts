import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Input()
  noImageTpl: TemplateRef<any>;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, { read: ElementRef })
  images: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngAfterContentInit() {
    console.log(this.images);
  }

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }

  cardClasses() {

    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    } else if (this.course.category == 'INTERMEDIATE') {
      return 'intermediate'
    } else if (this.course.category == 'ADVANCED') {
      return 'advanced'
    }
  }

}
