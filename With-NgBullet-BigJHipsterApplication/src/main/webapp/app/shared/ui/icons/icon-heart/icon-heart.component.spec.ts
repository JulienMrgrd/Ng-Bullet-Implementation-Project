import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IconHeartComponent } from './icon-heart.component';

describe('IconHeartComponent', () => {
    let component: IconHeartComponent;
    let fixture: ComponentFixture<IconHeartComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [IconHeartComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconHeartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
