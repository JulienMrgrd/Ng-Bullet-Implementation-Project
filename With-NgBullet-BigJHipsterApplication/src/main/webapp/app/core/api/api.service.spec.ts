/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';
import { AngularFireOffline } from 'angularfire2-offline';
import { configureTestSuite } from 'ng-bullet';
import { ApiService } from './api.service';
import { MockAngularFireOffline } from './mock-firebase-cache.service.spec';

xdescribe('Service: ApiService', () => {

    let mockAngularFireOffline: MockAngularFireOffline;
    configureTestSuite(() => {
        mockAngularFireOffline = new MockAngularFireOffline();
        TestBed.configureTestingModule({
            providers: [
                ApiService,
                { provide: AngularFireOffline, useValue: mockAngularFireOffline },
            ]
        });
    });

    beforeEach(async(() => {
        TestBed.compileComponents();
    }));

    it('should create the service', inject([ApiService], (service: ApiService) => {
        expect(service).toBeTruthy();
    }));

    it('should return a recipe', async(inject([ApiService], (service: ApiService) => {
        service.slugToRecipe('slug-2').subscribe((recipe) => {
            expect(recipe['id']).toEqual(2);
        });
        mockAngularFireOffline.update();
        mockAngularFireOffline.database.list('asdf');
    })));

    it('should return the latest recipe', async(inject([ApiService], (service: ApiService) => {
        service.latest.subscribe((latest) => {
            expect(latest['slug']).toEqual('slug-3');
        });
        mockAngularFireOffline.update();
    })));
});
