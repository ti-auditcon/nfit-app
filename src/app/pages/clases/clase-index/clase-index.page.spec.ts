import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClaseIndexPage } from './clase-index.page';

describe('ClaseIndexPage', () => {
  let component: ClaseIndexPage;
  let fixture: ComponentFixture<ClaseIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClaseIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
