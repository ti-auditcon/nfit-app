import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BoxSelectPage } from './box-select.page';

describe('BoxSelectPage', () => {
  let component: BoxSelectPage;
  let fixture: ComponentFixture<BoxSelectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxSelectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BoxSelectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
