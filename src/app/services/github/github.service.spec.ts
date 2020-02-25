import {GithubService} from './github.service';
import {TestBed} from '@angular/core/testing';

describe('GithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubService = TestBed.inject(GithubService);
    expect(service).toBeTruthy();
  });
});
