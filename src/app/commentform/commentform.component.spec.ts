import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CommentformComponent } from './commentform.component';
import { FormsModule } from '@angular/forms';

describe('CommentformComponent', () => {
  let component: CommentformComponent;
  let fixture: ComponentFixture<CommentformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentformComponent ],
      imports:[HttpClientModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
