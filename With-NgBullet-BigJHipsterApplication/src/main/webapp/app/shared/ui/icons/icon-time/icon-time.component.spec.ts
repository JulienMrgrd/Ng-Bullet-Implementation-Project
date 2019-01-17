import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconTimeComponent } from './icon-time.component';

describe('IconTimeComponent', () => {
    let component: IconTimeComponent;
    let fixture: ComponentFixture<IconTimeComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [IconTimeComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconTimeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
