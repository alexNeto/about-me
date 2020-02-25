import {TagsService} from './tags.service';
import {TestBed} from '@angular/core/testing';

describe('TagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagsService = TestBed.inject(TagsService);
    expect(service).toBeTruthy();
  });
});
