import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardplaylistComponent } from './cardplaylist.component';

describe('CardplaylistComponent', () => {
  let component: CardplaylistComponent;
  let fixture: ComponentFixture<CardplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ CardplaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
