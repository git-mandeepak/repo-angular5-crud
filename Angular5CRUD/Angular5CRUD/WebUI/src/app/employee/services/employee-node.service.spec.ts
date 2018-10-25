import { TestBed, inject } from '@angular/core/testing';

import { EmployeeNodeService } from './employee-node.service';

describe('EmployeeNodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeNodeService]
    });
  });

  it('should be created', inject([EmployeeNodeService], (service: EmployeeNodeService) => {
    expect(service).toBeTruthy();
  }));
});
