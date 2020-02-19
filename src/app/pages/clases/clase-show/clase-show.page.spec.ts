import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClaseShowPage } from './clase-show.page';

describe('ClaseShowPage', () => {
  let component: ClaseShowPage;
  let fixture: ComponentFixture<ClaseShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaseShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
