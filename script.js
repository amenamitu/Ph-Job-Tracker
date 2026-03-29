
let currentTab="all";
const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
function switchTab(tab){
    const tabs =["all","interview","rejected"];
    currentTab=tab;

    for(const t of tabs){
        const tabName = document.getElementById ("tab-" + t);
        if(t===tab){
            tabName.classList.remove("inactive-tab");
            tabName.classList.add("active-tab");
        }
          else{
            tabName.classList.remove("active-tab");
            tabName.classList.add("inactive-tab");
         }
    }

    const pages = [allContainer,interviewContainer,rejectedContainer];
    
    for(const section of pages){
      section.classList.add("hidden");
    }
     emptyState.classList.add("hidden");
     if(tab==="all"){
        allContainer.classList.remove("hidden");
        if(allContainer.children.length<1)
         emptyState.classList.remove("hidden");
     }
     else if(tab==="interview"){
        interviewContainer.classList.remove("hidden");
         if(interviewContainer.children.length<1)
         emptyState.classList.remove("hidden");
     }
     else{
      rejectedContainer.classList.remove("hidden");
       if(rejectedContainer.children.length<1)
         emptyState.classList.remove("hidden");
     }
        
   updateStat();       

}
// stat update
const allCount = document.getElementById("all-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const emptyState = document.getElementById("empty-state");
const tabCount = document.getElementById("tab-count");

switchTab(currentTab)

document.getElementById("job-container").addEventListener("click", function(event){
  const clickElement = event.target;
  const card = clickElement.closest(".job-card");
  const staus = card.querySelector(".staus");
  if(!card) return;
  if(clickElement.classList.contains("interview")){
     staus.innerText ="Interview";
     interviewContainer.appendChild(card);
     updateStat();
  }
   if(clickElement.classList.contains("rejected")){
       staus.innerText ="Rejected";
   rejectedContainer.appendChild(card);
   updateStat();
  }
   if(clickElement.closest(".delete")){
   card.remove();
   updateStat();
  }
});

function updateStat (){
   // allCount.innerText = allContainer.children.length;
   //  interviewCount.innerText = interviewContainer.children.length;
   //  rejectedCount.innerText = rejectedContainer.children.length;

    const counts = {
      all:allContainer.children.length,
      interview:interviewContainer.children.length,
      rejected:rejectedContainer.children.length,
    }

    allCount.innerText=counts ["all"];
    interviewCount.innerText=counts ["interview"];
    rejectedCount.innerText=counts ["rejected"];

    tabCount.innerText=counts[currentTab];

    if(counts[currentTab]<1){
       emptyState.classList.remove("hidden");
    }
    else{
       emptyState.classList.add("hidden");
    }
}
updateStat();