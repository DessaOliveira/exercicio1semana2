let students = [
  { nome: "Jorge", nota: 8 },
  { nome: "Laura", nota: 7 },
  { nome: "Felipe", nota: 9 },
  { nome: "Sara", nota: 6 },
  { nome: "Juan", nota: 5 },
];
var total = 0;
for (i = 0; i < students.length; i++) {
  total += students[i].nota;
}
let media = total / students.length;
console.log("A média dos alunos é:" + media);

let aprovou = [];
let reprovou = [];

for (i = 0; i < students.length; i++) {
  if (students[i].nota >= media) {
    aprovou.push(students[i].nome);
  } else {
    reprovou.push(students[i].nome);
  }
}
console.log("estudantes aprovados:" + aprovou.slice(0, 3));
console.log("estudantes reprovados:" + reprovou.slice(0, 2));
