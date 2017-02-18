import { SpotifyAngularPage } from './app.po';

describe('spotify-angular App', function() {
  let page: SpotifyAngularPage;

  beforeEach(() => {
    page = new SpotifyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
