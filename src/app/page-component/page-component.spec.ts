import { TestBed } from '@angular/core/testing';
import { PageComponent } from './page-component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ChipModule } from './chip';
import { FormDialogModule } from './form-dialog';
import { PageRoutingModule } from './page.routing';
import { FormSuccessModule } from './success-dialog';

describe('PageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PageComponent
      ],
      imports: [
        CommonModule,
        ChipModule,
        MatIconModule,
        MatDialogModule,
        PageRoutingModule,
        FormDialogModule,
        FormSuccessModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
