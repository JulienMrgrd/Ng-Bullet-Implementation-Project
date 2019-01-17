import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from './footer.component';
import { UiModule } from '../../shared/ui/ui.module';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, UiModule],
            declarations: [FooterComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
