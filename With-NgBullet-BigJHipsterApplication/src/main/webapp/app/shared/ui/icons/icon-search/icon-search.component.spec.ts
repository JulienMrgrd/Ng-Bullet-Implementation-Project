import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconSearchComponent } from './icon-search.component';

describe('IconSearchComponent', () => {
    let component: IconSearchComponent;
    let fixture: ComponentFixture<IconSearchComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [IconSearchComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
