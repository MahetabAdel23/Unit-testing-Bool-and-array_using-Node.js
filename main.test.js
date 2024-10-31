
const {even,animals,arr_num}=require('./main')

test('even - should return true for 4 ', ()=>{
    expect(even(4)).toBeTruthy();
});

test('even - should return false for 5 ', ()=>{
    expect(even(5)).toBeFalsy();
});

test('validation -  should x be undefined ', ()=>{
    let x;
    expect(x).toBeUndefined();
});

test('validation - should y be defined ', ()=>{
    let y=5;
    expect(y).toBeDefined();
});

test('validation - should y be equal null ', ()=>{
    let y=null;
    expect(y).toBeNull();
});

test('validation - should y be equal value ', ()=>{
    let y=5;
    expect(y).not.toBeNull();
});

test('validation - should y be equal value ', ()=>{
    let y=null;
    expect(y).not.toBeNull();
});

test('animals -should return true if cat in array',()=>
{
expect(animals).toContain('cat');
});
test('arr_num -should return true if 5 in arr',()=>{
    expect(arr_num).toContain(5);
});



describe('even',()=>{
    test(' should return true for 6 ', ()=>{
        expect(even(6)).toBeTruthy();
    });
    
    test(' should return false for 3 ', ()=>{
        expect(even(3)).toBeFalsy();
    });
});