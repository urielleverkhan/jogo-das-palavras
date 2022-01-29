import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPComponent } from './tag-p.component';

describe('TagPComponent', () => {
  let component: TagPComponent;
  let fixture: ComponentFixture<TagPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
