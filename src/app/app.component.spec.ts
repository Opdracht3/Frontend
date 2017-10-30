import { AppComponent } from './app.component';

import { async } from '@angular/core/testing';

describe('AppComponent', () => {

  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('rock-paper-scissors');
  }));
});
