import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ButtonClearComponent } from '../../shared/button-clear/button-clear.component';

describe('ButtonClearComponent', () => {
    let component: ButtonClearComponent;
    let fixture: ComponentFixture<ButtonClearComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonClearComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonClearComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
