import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-card',
    templateUrl: './course-card.component.html',
    styleUrls: ['./course-card.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {

    @Input()
    course: Course;

    @Input()
    cardIndex: number;

    @Input()
    type;

    @Output('courseChanged')
    courseEmitter = new EventEmitter<Course>();


    constructor(private coursesService: CoursesService
    ) {

        console.log('constructor', this.course);
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngOnInit() {

        console.log('ngOnInit', this.course);
    }

    ngOnDestroy() {

        console.log('ngOnDestroy');

    }

    onSaveClicked(description: string) {

        this.courseEmitter.emit({ ...this.course, description });

    }

    onTitleChanged(newTitle: string) {
        this.course.description = newTitle;
    }




}
