import { configureTestSuite } from 'ng-bullet';
/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { NavComponent } from './nav.component';
import { MockDocumentService } from '../../../mocks/mock-document.service.spec';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;
    const mockDocumentService = new MockDocumentService();
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [NavComponent],
            providers: [
                { provide: 'Document', useValue: mockDocumentService }
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
