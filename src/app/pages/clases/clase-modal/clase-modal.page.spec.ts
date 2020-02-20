import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClaseModalPage } from './clase-modal.page';

describe('ClaseModalPage', () => {
  let component: ClaseModalPage;
  let fixture: ComponentFixture<ClaseModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaseModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
