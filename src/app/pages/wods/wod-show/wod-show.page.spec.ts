import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WodShowPage } from './wod-show.page';

describe('WodShowPage', () => {
  let component: WodShowPage;
  let fixture: ComponentFixture<WodShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WodShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WodShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
