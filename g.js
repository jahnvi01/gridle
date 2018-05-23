function slides(id)
{
slideShow=["img-1.png","img-2.png","img-3.png"];
count=0;
var slideImage=document.getElementById("slideImage");
if(id=="next"){
count++;
slideImage.src = slideShow[count];
console.log(id);
}
if(id=="prev"){
count--;
console.log(id);
slideImage.src = slideShow[count];
}


}