// function a() {
//     console.log('a')
// }
//
// function b() {
//     console.log('b')
// }
//
// a()
// b()
// //a
// //b
//
// function a() {
//     setTimeout(function () {
//         console.log('a')
//     }, 1000)
// }
//
// function b() {
//     console.log('b')
//
// }
//
// a()
// b()
// //b
// //a
//
// function a(bc) {
//     setTimeout(function () {
//         console.log('a')
//         bc()
//     }, 1000)
// }
//
// // 콜백안에 콜백안에 콜백이 들어가는 경우를 콜백지옥
// //그걸 해결하기 위해 Promise가 나옴
//
// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('a')
//             resolve()
//         }, 1000)
//     })
// }
//
//
// function b() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('a')
//             resolve()
//         }, 1000)
//     })
// }
//
// function c() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('a')
//             resolve()
//         }, 1000)
//     })
// }
//
// function d() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             console.log('a')
//             resolve()
//         }, 1000)
//     })
// }
//
//
// //
// a()
//     .then(() => b())
//     .then(() => c())
//     .then(() => {d()}) //위아래 같음
//
// // Es2017 8 버전
//
// await a() // a가 실행되고나서 다음함수 실행하게할때 then이라는 함수를 붙일 수 있는 함수에만 붙인다
// await b() //무조건 진행되는게 아니라 async 함수 범위 안에서만 됨
// await c()
// d()
//
// async function f() {
//     await a()
//     await b()
//     await c()
//     await d()
//     console.log('done')
// }
//
// //resolve : 로직 마무리 됐을때 실행
// //reject : 로직에 에러나거나 했을 떄 실행 (중단할때)
// function a(){
//     return new Promise( (resolve, reject) => {
//         if(isError){
//             reject('Error message') // reject이하의 함수는 동작 X
//         }
//
//         setTimeout( () => {
//             console.log('a')
//             resolve('done')
//         }, 1000)
//     })
// }
// //
// a()
//     .then(response => {
//         // response === 'done'
//     })  //resolve
//     .catch((error) => {
//         console.log(error)
//         alert(error)
//     }) //reject
//     .finally(() => {
//         console.log('done ')
//     })
//
//
// //일반적을 많이 쓰고 못쓰는 몇몇  예외 경우만 then으로 사용
// async function f1() {
//
//     //async 함수에선 then 못쓰고 try catch 써야함
//     try {
//
//         const res =     await a()
//         console.log(res)
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('done')
//     }
//
// }
//
// f1();
