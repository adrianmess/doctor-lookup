import { Class } from "./../src/class.js";

describe('Class', function() {
  let reusableObject;

  beforeEach(function() {
    reusableObject = new Class(parameter);
  });

  it('describe test', function() {
    expect(reusableObject.prop).toEqual(value);
  });
});
