import printListValuesUnbound from './printListValues.unbound';
import { TNode } from '../linkedList';

describe(`Print values from linked list`, () => {
  let printValue: jest.Mock<void, [any]>;
  const node: TNode<number> = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  };

  beforeAll(() => {
    printValue = jest.fn().mockReturnValue(null);

    printListValuesUnbound
      .apply(null, [printValue])
      .apply({ head: node, size: 3 }, []);
  });

  it('Should call printValue function 3 times', () => {
    expect(printValue)
      .toHaveBeenCalledTimes(3);
  });
  it('Should call printValue function with exact parameters', () => {
    expect(printValue)
      .toHaveBeenNthCalledWith(1, 1);
    expect(printValue)
      .toHaveBeenNthCalledWith(2, 2);
    expect(printValue)
      .toHaveBeenNthCalledWith(3, 3);
  });
});
