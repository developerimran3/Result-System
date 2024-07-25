let studentRoll = prompt("Roll");
let studentReg = prompt("Reg");

name.forEach((item, index) => {
  if (roll[index] == studentRoll && reg[index] == studentReg) {
    console.log(`
      Name  : ${item}
      Roll  : ${roll[index]}
      Reg  : ${reg[index]}
  =========================================
  Subject     -   Mark  -  GPA   -   Grade
  Bangla      -    ${ban[index]}   -   ${getGpa(ban[index])}  -    ${getGrade(
      ban[index]
    )}
  English     -    ${eng[index]}   -   ${getGpa(eng[index])}  -    ${getGrade(
      eng[index]
    )}
  Math        -    ${math[index]}   -   ${getGpa(
      math[index]
    )}    -    ${getGrade(math[index])}
  Science     -    ${science[index]}   -   ${getGpa(
      science[index]
    )}    -    ${getGrade(science[index])}
  S_ Science  -    ${s_science[index]}   -   ${getGpa(
      s_science[index]
    )}    -    ${getGrade(s_science[index])}
  Religion    -    ${reli[index]}   -   ${getGpa(
      reli[index]
    )}    -    ${getGrade(reli[index])}
  Agriculture -    ${agr[index]}   -   ${getGpa(agr[index])}    -    ${getGrade(
      agr[index]
    )}
  ===========================================
  Final Result =  ${
    isPassed(
      ban[index],
      eng[index],
      math[index],
      science[index],
      s_science[index],
      reli[index],
      agr[index]
    )
      ? "Passed"
      : "Failed"
  }
  Final GPA    =  ${getFinalGPA(
    ban[index],
    eng[index],
    math[index],
    science[index],
    s_science[index],
    reli[index],
    agr[index]
  ).toFixed(2)}
  Final Grade  =  ${getFinalGrade(
    ban[index],
    eng[index],
    math[index],
    science[index],
    s_science[index],
    reli[index],
    agr[index]
  )}
  `);
  }
});
