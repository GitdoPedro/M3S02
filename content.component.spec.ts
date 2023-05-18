import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentComponent]
    })
    .compileComponents();
    it('ngOnInit - Should call carregarNotificacoes method with success', () => {
  // Arrange
  spyOn(component, 'carregarNotificacoes');

  // Act
  component.ngOnInit();

  // Assert
  expect(component.carregarNotificacoes).toHaveBeenCalled();
});
    
    it('lerNotificacao - Should call atualizarLista method with success', () => {
  // Arrange
  spyOn(component, 'atualizarLista');

  // Act
  component.lerNotificacao();

  // Assert
  expect(component.atualizarLista).toHaveBeenCalled();
});


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });
});
