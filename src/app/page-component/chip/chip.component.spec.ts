import { TestBed } from '@angular/core/testing';
import { ChipComponent } from './chip.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ChipComponent
      ],
      imports: [
        CommonModule,
        MatIconModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChipComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
