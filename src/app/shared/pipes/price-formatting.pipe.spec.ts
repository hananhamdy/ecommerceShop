import { PriceFormattingPipe } from './price-formatting.pipe';

describe('PriceFormattingPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceFormattingPipe();
    expect(pipe).toBeTruthy();
  });
});
