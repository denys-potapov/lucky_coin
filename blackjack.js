blackjack.js
<style>
#D{font-size:20vh;color:red}
#P,#M,#E,#R{font-size:20vh;color:tan}
</style>
<div id=P></div>
<div id=D></div>
<div id=R>
<button id=M>More</button>
<button id=E>Enough</button>
<script>
C = []
for (let i = 0; i < 14; i++) {
  [56481,56497,56513,56529].map(s=>C.push([String.fromCharCode(55356, s+i),i<10?i+1:10]))
}

C.sort(() => 0.5 - Math.random())
dnum=pnum = 2
S = (cs) => {
  r=cs.map(c=>c[1]).sort().reverse().reduce((a,e,i)=>
    a+((e==1&&a<=10+cs.length-1-i)?11:e)
  ,0)
  return r>21?0:r
}
step=()=>{
  dsel = C.slice(pnum, pnum+dnum++)
}
d=()=>{
  step()
  while(S(dsel)<=11)step()

  D.innerText = dsel.map(e=>e[0]).join('')

  R.innerText = S(psel) > S(dsel) ? 'You won' : S(psel) == S(dsel) ? 'Tie' : 'Casino won'
}

p=()=>{
  psel = C.slice(0, pnum++)
  P.innerText = psel.map(e=>e[0]).join('')
  if(S(psel)==0)d()
}

M.onclick=p
E.onclick=d
p()
</script>