import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HuespedesPage } from './huespedes.page';

describe('HuespedesPage', () => {
  let component: HuespedesPage;
  let fixture: ComponentFixture<HuespedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuespedesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HuespedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
