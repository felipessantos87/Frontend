const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1(){
let conta1 = []
for(let i = 1;i <= 25; i++){
    conta1.push(i)
}
return conta1
}

function kata2(){
let conta2 = []
for(let i = 25;i >= 1; i--){
    conta2.push(i)
}
return conta2
}

function kata3(){
let conta3 = []
for(let i = -1;i >=  -25; i--){
    conta3.push(i)
}
return conta3
}

function kata4(){  
let conta4 = []
for(let i = -25;i <=  -1; i++){
    conta4.push(i)
}  
return conta4
}

function kata5(){
let conta5 = []
for(let i = 25;i >=  -25; i--){
    conta5.push(i)
}
return conta5
}

function kata6(){
let conta6 = []
for(let i = 1;i <=  100; i++){
if(i % 3 == 0){
    conta6.push(i)
}
}
return conta6
}

function kata7(){
let conta7 = []
for(let i = 1;i <=  100; i++){
if(i % 7 == 0){
    conta7.push(i)
}
} 
return conta7
}

function kata8(){  
let conta8 = []
for(let i = 100;i >=  1; i--){
if(i % 3 == 0 || i % 7 == 0){
    conta8.push(i)
}
}
return conta8
}

function kata9(){
let conta9 = [] 
for(let i = 1;i <=  100; i++){
if(i % 5 == 0 && i % 2 == 1){
    conta9.push(i)
}
}
return conta9
}

function kata10(x){  
let conta10 = []
for(let i = 0;i <  20; i++){
    conta10.push(x[i])
}
return conta10
}

function kata11(x){
let conta11 = []
for (let i = 0; i <= x.length; i++) {
if(x[i] % 2 == 0 && conta11.length < 20){
    conta11.push(x[i])
}
}
return conta11
}

function kata12(x){   
let conta12 = []
for (let i = 0; i <= x.length; i++) {
if(x[i] % 2 == 1 && conta12.length < 20){
    conta12.push(x[i])
}
}
return conta12
}

function kata13(x){
let conta13 = []
for (let i = 0; i <= x.length; i++) {
if(x[i] % 8 == 0){
    conta13.push(x[i])
}
}
return conta13
}

function kata14(x){ 
let conta14 = []
let quadrado = 0
for (let i = 0; i <= x.length-1; i++) {
    quadrado = x[i] * x[i]
    conta14.push(quadrado)
}
return conta14
}

function kata15(){ 
let conta15 = 0
for (let i = 0; i <= 20; i++) {
    conta15 += i
}
return conta15
}

function kata16(x){
let conta16 = 0
for (let i = 0; i < x.length; i++) {
    conta16 += x[i]
}
return conta16
}

function kata17(x){
conta17 = x[0]
for (let i = 0; i < x.length; i++) {
if(conta17 > x[i]){
    conta17 = x[i]
}
}
return conta17
}

function kata18(x){
conta18 = x[0]
for (let i = 0; i < x.length; i++) {
if(conta18 < x[i]){
    conta18 = x[i]
}
}
return conta18
}

