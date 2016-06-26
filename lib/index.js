import { range, filter } from 'ramda';
import isDivisible from 'isdivisible';

function canDivideIn(num) {
  const opts = range(1, num + 1);

  const isDivisibleInNum = isDivisible(num);

  const divisibleNumsFilter = filter(isDivisibleInNum, opts);

  return divisibleNumsFilter;
}

export default canDivideIn;
