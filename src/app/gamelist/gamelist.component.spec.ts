import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GamelistComponent } from './gamelist.component';
import { Router } from '@angular/router';
import { GamesService } from '../_services/games.service';
import { Mock } from 'ts-mocks';

describe('GamelistComponent', () => {

  let app: GamelistComponent;
  let fixture: ComponentFixture<GamelistComponent>;
  // let game = Mock.of<GamelistComponent>(x => x.title == 'bla bla');
  const mockGameListComponent = new Mock<GamelistComponent[]>();
  const mockGamesService = new Mock<GamesService>();
  const mockRouter = new Mock<Router>();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        GamelistComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    // fixture = TestBed.createComponent(GamelistComponent);
    // app = fixture.componentInstance;
    // fixture.detectChanges();

    mockGamesService.setup((x) => x.getGames).is(() => Promise.resolve(mockGameListComponent.Object));
    // mockRouter.setup((x) => x.navigate())

    app = new GamelistComponent(mockRouter.Object, mockGamesService.Object);
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'app'`, async(() => {
  //   expect(app.title).toEqual('app');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   fixture = TestBed.createComponent(GamelistComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
