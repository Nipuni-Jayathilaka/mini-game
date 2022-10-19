const player=document.getElementById('player');
const ground=document.getElementById('ground');
const birds=document.getElementById('birds');
const tree=document.getElementById('tree');
const tile1=document.getElementById('tile1');
const tile3=document.getElementById('tile3');
const arrow=document.getElementById('arrow');
const alert=document.getElementById('alert');
const bg=document.getElementById('bg');

let dx=0;
let dy=10;   
let accelaration=0;
let index=0;
let db=0;

addEventListener('click',()=>{
    alert.style.visibility=`hidden`;
    bg.style.visibility=`hidden`;
});
setInterval(()=>{
    if((birds.offsetLeft+birds.offsetWidth)<=0){
        birds.style.left=`${innerWidth}px`;
        db=0;
        
    }
    birds.style.left=`${birds.offsetLeft-db++}px`;
},50);

    const draw=()=>{
        if(dx>0 || dx<0){
            player.style.backgroundImage=`url('img/templerun/Run__00${index++}.png')`;
            if(index>9) index=0;
            if(dx>0){
                if((tree.offsetLeft+tree.offsetWidth)<=0){
                    tree.style.left=`${innerWidth}px`;
                    db=0; 
                }
                tree.style.left=`${tree.offsetLeft-db++}px`;
                if((tile1.offsetLeft+tile1.offsetWidth)<=0){
                    tile1.style.left=`2000px`;
                    db=0; 
                }
                tile1.style.left=`${tile1.offsetLeft-db++}px`;
                
                if((ground.offsetLeft+ground.offsetWidth)<=0){
                    ground.style.left=`${innerWidth}px`;
                    db=0; 
                }
                ground.style.left=`${ground.offsetLeft-db++}px`;
                if((arrow.offsetLeft+arrow.offsetWidth)<=0){
                    arrow.style.left=`${innerWidth}px`;
                    db=0; 
                }
                arrow.style.left=`${arrow.offsetLeft-db++}px`;
                
            }
            if(dx<0){
                if((ground.offsetLeft+ground.offsetWidth)<=0){
                    ground.style.left=`${innerWidth}px`;
                    db=0; 
                }
                ground.style.left=`${ground.offsetLeft+db++}px`;
                if((tree.offsetLeft+tree.offsetWidth)<=0){
                    tree.style.left=`${innerWidth}px`;
                    db=0; 
                }
                tree.style.left=`${tree.offsetLeft+db++}px`;
                if((tile1.offsetLeft+tile1.offsetWidth)<=0){
                    tile1.style.left=`2000px`;
                    db=0; 
                }
                tile1.style.left=`${tile1.offsetLeft+db++}px`;
                if((arrow.offsetLeft+arrow.offsetWidth)<=0){
                    arrow.style.left=`${innerWidth}px`;
                    db=0; 
                }
                arrow.style.left=`${arrow.offsetLeft+db++}px`;
                
            }
            
        }else{
            player.style.backgroundImage=`url('img/templerun/Idle__00${index++}.png')`;
            if(index>9) index=0;
        }
        if(dy>0 || dy<0){
            if(index>9) index=0;
        }
        requestAnimationFrame(draw);
    }
    const animate=()=>{    
        if((player.offsetLeft+player.offsetWidth)>innerWidth){
            dx=0;
            player.style.left=`${innerWidth-player.offsetWidth}px`;
        }else if(player.offsetLeft<0){
            dx=0;
            player.style.left=`0`;
        }
        dy +=accelaration;
        if((player.offsetTop+player.offsetHeight) > ground.offsetTop){
            dy=0;
            player.style.top=`${ground.offsetTop-player.offsetHeight}px`;
            accelaration=0;
        }
        
        player.style.top=`${player.offsetTop+dy}px`;
        player.style.left=`${player.offsetLeft+dx}px`;
        requestAnimationFrame(animate);
    }

addEventListener('keydown',(eventData)=>{
    if(eventData.key==='ArrowRight'){
        index=0;
        player.classList.remove('turn');
        dx=10;
    }else if(eventData.key==='ArrowLeft'){
        index=0;
        player.classList.add('turn');
        dx=-10;
    }
})
addEventListener('keyup',(eventData)=>{
    if(eventData.key==='ArrowRight'){
        dx=0;
    }else if(eventData.key==='ArrowLeft'){
        dx=0;
    }
})
addEventListener('keydown',(eventData)=>{
    if(eventData.key==='ArrowUp'){
        index=0;
        dy=-3;
        accelaration=0.1;
    }
});
requestAnimationFrame(draw);
requestAnimationFrame(animate);

// let j=0;
// let t1=0;
// let interval=2;
// function repaint(timestamp){//this indicate the time between starting and the time when executing the code
//     if(!t1) t1=timestamp;
//     let diff=timestamp-t1;
//     if(diff>=(interval* 1000)){
//         t1=timestamp;
//         console.log('painted')
//     }
//     requestAnimationFrame(repaint);
  
// }
// requestAnimationFrame(repaint);
