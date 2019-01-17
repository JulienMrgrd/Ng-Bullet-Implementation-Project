import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconResetComponent } from './icon-reset.component';

describe('IconResetComponent', () => {
    let component: IconResetComponent;
    let fixture: ComponentFixture<IconResetComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [IconResetComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconResetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
