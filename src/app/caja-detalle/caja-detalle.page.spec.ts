import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CajaDetallePage } from './caja-detalle.page';

describe('CajaDetallePage', () => {
  let component: CajaDetallePage;
  let fixture: ComponentFixture<CajaDetallePage>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ CajaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CajaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
