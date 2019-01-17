import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconPinterestComponent } from './icon-pinterest.component';

describe('IconPinterestComponent', () => {
    let component: IconPinterestComponent;
    let fixture: ComponentFixture<IconPinterestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            declarations: [IconPinterestComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(IconPinterestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
