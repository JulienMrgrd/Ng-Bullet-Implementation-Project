import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconMinusComponent } from './icon-minus.component';

describe('IconMinusComponent', () => {
    let component: IconMinusComponent;
    let fixture: ComponentFixture<IconMinusComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [IconMinusComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconMinusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
