// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let Student = function (name, subject) {
    this.name=name;
    this.subject=subject;
};
let Subject = function (name, mark) {
    this.name=name;
    this.mark=mark;
};

let DisplayNameAndPercentage=function(students)
{
    let str='Student Name       Percentage     Subjects\n';
    students.forEach(element => {
        str=str+element.name+ '       '+CalulatePercentage(element)+'     '+GetSubjects(element)+'\n';
    });
    
    return str;
};
let CalulatePercentage=function(student)
{
    let mark1=student.subject[0].mark;
    let mark2=student.subject[1].mark;

    return Math.round(((mark1+mark2)/200)*100)+'%';
};

let GetSubjects =function(student)
{
    return student.subject[0].name+','+student.subject[1].name;
};


let Students=[];
Students.push(new Student('Student1',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Student2',[new Subject('Grammar',40),new Subject('Accounts',56)]));
Students.push(new Student('Student3',[new Subject('Grammar',30),new Subject('Accounts',56)]));
Students.push(new Student('Student4',[new Subject('Grammar',94),new Subject('Accounts',56)]));
Students.push(new Student('Student5',[new Subject('Grammar',56),new Subject('Accounts',56)]));
Students.push(new Student('Student6',[new Subject('Grammar',54),new Subject('Accounts',56)]));
Students.push(new Student('Student7',[new Subject('Grammar',92),new Subject('Accounts',56)]));
Students.push(new Student('Student8',[new Subject('Grammar',50),new Subject('Accounts',56)]));
Students.push(new Student('Student9',[new Subject('Grammar',60),new Subject('Accounts',56)]));
Students.push(new Student('Student10',[new Subject('Grammar',80),new Subject('Accounts',56)]));
Students.push(new Student('Student11',[new Subject('Grammar',91),new Subject('Accounts',56)]));
Students.push(new Student('Student12',[new Subject('Grammar',34),new Subject('Accounts',56)]));
Students.push(new Student('Student13',[new Subject('Grammar',78),new Subject('Accounts',56)]));
Students.push(new Student('Student14',[new Subject('Grammar',12),new Subject('Accounts',56)]));
Students.push(new Student('Student15',[new Subject('Grammar',34),new Subject('Accounts',56)]));
Students.push(new Student('Student16',[new Subject('Grammar',78),new Subject('Accounts',56)]));
Students.push(new Student('Student17',[new Subject('Grammar',87),new Subject('Accounts',56)]));
Students.push(new Student('Student18',[new Subject('Grammar',11),new Subject('Accounts',56)]));
Students.push(new Student('Student19',[new Subject('Grammar',98),new Subject('Accounts',56)]));
Students.push(new Student('Student20',[new Subject('Grammar',100),new Subject('Accounts',56)]));
Students.push(new Student('Student100',[new Subject('Grammar',34),new Subject('Accounts',56)]));
Students.push(new Student('Student101',[new Subject('Grammar',54),new Subject('Accounts',56)]));
Students.push(new Student('Student102',[new Subject('Grammar',34),new Subject('Accounts',56)]));
Students.push(new Student('Student103',[new Subject('Grammar',23),new Subject('Accounts',56)]));
Students.push(new Student('Student104',[new Subject('Grammar',45),new Subject('Accounts',56)]));
Students.push(new Student('Student105',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Student106',[new Subject('Grammar',90),new Subject('Accounts',6)]));
Students.push(new Student('Student107',[new Subject('Grammar',90),new Subject('Accounts',46)]));
Students.push(new Student('Student108',[new Subject('Grammar',90),new Subject('Accounts',16)]));
Students.push(new Student('Student109',[new Subject('Grammar',90),new Subject('Accounts',57)]));
Students.push(new Student('Student110',[new Subject('Grammar',90),new Subject('Accounts',52)]));
Students.push(new Student('Student30',[new Subject('Grammar',90),new Subject('Accounts',98)]));
Students.push(new Student('Student31',[new Subject('Grammar',90),new Subject('Accounts',46)]));
Students.push(new Student('Student32',[new Subject('Grammar',90),new Subject('Accounts',45)]));
Students.push(new Student('Student33',[new Subject('Grammar',90),new Subject('Accounts',12)]));
Students.push(new Student('Student34',[new Subject('Grammar',90),new Subject('Accounts',67)]));
Students.push(new Student('Student35',[new Subject('Grammar',90),new Subject('Accounts',89)]));
Students.push(new Student('Student36',[new Subject('Grammar',90),new Subject('Accounts',98)]));
Students.push(new Student('Student37',[new Subject('Grammar',90),new Subject('Accounts',12)]));
Students.push(new Student('Student38',[new Subject('Grammar',90),new Subject('Accounts',34)]));
Students.push(new Student('Student39',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Student40',[new Subject('Grammar',90),new Subject('Accounts',67)]));
Students.push(new Student('Student41',[new Subject('Grammar',90),new Subject('Accounts',67)]));
Students.push(new Student('Student42',[new Subject('Grammar',90),new Subject('Accounts',78)]));
Students.push(new Student('Studefdfgdf',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Student1gdf',[new Subject('Grammar',90),new Subject('Accounts',23)]));
Students.push(new Student('Student1fgf',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Student1dfgdfg',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Student1gdfgdfg',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Student1gdfgdfgdfgd',[new Subject('Grammar',90),new Subject('Accounts',56)]));
Students.push(new Student('Stude1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1vcbc',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1xcvxc',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1123eqwe',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1cxvnnvnc',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1qwescsvdfgd',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Stude4242342',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student17567567gf',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1cvxq4egdf',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1gcbb453',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Studfsdfsfdsfe545',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1789yjfgdt',[new Subject('Grammar',90),new Subject('Physics',34)]));
Students.push(new Student('Student1xcvaqq',[new Subject('Grammar',90),new Subject('Physics',34)]));
Students.push(new Student('Student1q1q1q',[new Subject('Grammar',90),new Subject('Physics',6)]));
Students.push(new Student('Student1q22q2q2q',[new Subject('Grammar',90),new Subject('Physics',16)]));
Students.push(new Student('Student1q3333q3',[new Subject('Grammar',90),new Subject('Physics',52)]));
Students.push(new Student('Student1a333a33a3a',[new Subject('Grammar',90),new Subject('Physics',46)]));
Students.push(new Student('Student1f55c5f5f5',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1b6b666b',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1g5g5g5g5',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1o9o9o9',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1n1n1n1n',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1getrt45',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1u677u7u6u',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1o9o98u77yy6y6y',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1azsddsdsdewewee565',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('wererStudent1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('csdsfStudent1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('245Student1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('87978Student1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('005534343Student1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('bgbg4434Student1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('12e343eStudent1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('8i8i8iStudent1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('i8i8rfr54Student1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('76g5tt5Student1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('bfc vbcbStudent1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Stubcvbcvbdent1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Studeetertrtnt1',[new Subject('Grammar',90),new Subject('Physics',52)]));
Students.push(new Student('Studentetetegft1',[new Subject('Grammar',90),new Subject('Physics',16)]));
Students.push(new Student('Studen53454t1',[new Subject('Grammar',90),new Subject('Physics',53)]));
Students.push(new Student('Stfdg54udent1',[new Subject('Grammar',90),new Subject('Physics',5)]));
Students.push(new Student('Stud32ew3ent1',[new Subject('Grammar',90),new Subject('Physics',6)]));
Students.push(new Student('Stumjmjdent1',[new Subject('Grammar',90),new Subject('Physics',26)]));
Students.push(new Student('Stud121243dfdfent1',[new Subject('Grammar',90),new Subject('Physics',46)]));
Students.push(new Student('S232323tudent1',[new Subject('Grammar',90),new Subject('Physics',36)]));
Students.push(new Student('Stfvfgfhsdsdudent1',[new Subject('Grammar',90),new Subject('Physics',50)]));
Students.push(new Student('Studenbgbgbrerwer5454t1',[new Subject('Grammar',90),new Subject('Physics',51)]));
Students.push(new Student('dfgdfgdfgdfg766Student1',[new Subject('Grammar',90),new Subject('Physics',56)]));
Students.push(new Student('Student1bgfbgfb',[new Subject('Grammar',90),new Subject('Physics',56)]));

console.info(DisplayNameAndPercentage(Students));
