import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { COURSES } from '../db-data';
import { AppConfig, CONFIG_TOKEN } from './config';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  // courses$: Observable<Course[]>

  courses: Course[] = COURSES;


  constructor(
    private coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private config: AppConfig) {

  }

  ngOnInit() {
  }


  onEditCourse() {
    this.courses = [undefined];
  }

  save(course: Course) {

    this.coursesService.saveCourse(course)
      .subscribe(
        () => console.log('course saved!')
      )

  }
}
