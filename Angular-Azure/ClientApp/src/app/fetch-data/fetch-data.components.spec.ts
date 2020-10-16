import { HttpClient } from '@angular/common/http'
import { FetchDataComponent } from './fetch-data.component'
import { TestBed, ComponentFixture } from '@angular/core/testing'


export class MockHttp {
  get(url: string) {
    return {
      subscribe: () => { }}
  }
}

let mockHttp: MockHttp;
let fixture: ComponentFixture<FetchDataComponent>;


describe('fetchdata', () => {
  beforeEach(() => {
    mockHttp = new MockHttp();
    spyOn(mockHttp, 'get').and.returnValue({ subscribe: () => { } })

    TestBed.configureTestingModule({
      declarations: [FetchDataComponent],
      providers: [
        { provide: HttpClient, useValue: mockHttp },
        { provide: 'BASE_URL',useValue:''}
      ]
    })
    fixture = TestBed.createComponent(FetchDataComponent);
    fixture.detectChanges();
  });

  it('should call the http get', () => {
    expect(mockHttp.get).toHaveBeenCalled();
  })
})
