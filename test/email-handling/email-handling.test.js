const { ValidationError, ResponseValidationError } = require("../../common/errors/errors");
const handleEmail = require("../../src/email-handling/email-handling");

test('Incoming student response does not return null response', () => {
    return expect(handleEmail({sender: "student@test.com", date: new Date(2021, 9, 8), message: "#Assignment 23#"})).not.toBeNull();
});

test('Can ', () => {
    return expect(handleEmail({sender: "student@test.com", date: new Date(2021, 9, 8), message: "#Assignment 23#"})).not.toBeNull();
});

const example1 = `
<div dir="auto"><div><br><br><div class="gmail_quote"><div dir="ltr" class="gmail_attr">søn. d. 6. feb. 2022 00.30 skrev  &lt;<a href="mailto:andr3196@gmail.com">andr3196@gmail.com</a>&gt;:<br></div><blockquote class="gmail_quote" style="margin:0 0 0 .8ex;border-left:1px #ccc solid;padding-left:1ex">Hej <br>
Her er dagens opgaver:<br>
<br>
#Assignment 1#<br>
#Problem 1#<br>
1) Reducer udtrykket lkdsjfld<br>
<br>
#Answer (Expression)#: 10gh - ab<br>
<br>
#Problem 2#<br>
2) Udregn følgende:<br>
33 + 44,45 = <br>
<br>
#Answer (Number:,)#: 77,45<br>
<br>
#Problem 3#<br>
3) Vælg én af følgende:<br>
<br>
#Answer (Options)#: 3<br>
#Option 1#:<br>
Værdi 1<br>
#Option 2#:<br>
Værdi 2<br>
#Option 3#:<br>
Værdi 3<br>
<br>
#Problem 4#<br>
3) Antag et svar som tekst<br>
<br>
#Answer (text)#: Svar på 4<br>
<br>
 a9af7bba-37ed-4915-9329-700a45cb2221</blockquote></div></div></div>`;
