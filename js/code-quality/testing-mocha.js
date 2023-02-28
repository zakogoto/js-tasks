it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
    result *= x;
    assert.equal(pow(x, 2), result); //  
  
    result *= x;
    assert.equal(pow(x, 3), result);
});

/*в этом примере проверки записаны в одну функцию и при выпадении ошибки, будет сложно понять что именно привело к падению.
Желательно разделить проверку на отдельные независимые функции.
*/
