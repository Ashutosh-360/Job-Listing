const cardContainer = document.getElementsByClassName("card-container")[0];
let arr=[];



// ===============Fetching JSON=============
const fetchFunc=()=>{fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((company) => {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `<div class="card-left">
  <img src=${company.logo} alt="" />
  <div class="company-card">
    <h4>${company.company}</h4>
    <h3>${company.position}</h3>
    <div class="info">
      <p>${company.postedAt}</p>
      <p>~${company.contract}</p>
      <p>~${company.location}</p>
    </div>
  </div>
</div>
<div class="card-right">
<button class="role">${company.role}</button>
<button class="level">${company.level}</button>
${createLang(company.languages)}
${createTools(company.tools)}
</div>`;

cardContainer.appendChild(cardElement);
    });
  });

// ============Creating languages button=======
  const createLang = (langs)=>{
    let btnContainer="";
    let count=0;
    langs.forEach((lang)=>{
      count++;
      btnContainer += `<button class=${"languages"+count}>${lang}</button>`;
    });
    return btnContainer;
}}


// ============Creating tools button=======
const createTools = (tools)=>{
  let btnContainer="";
  let count=0;
  tools.forEach((tool)=>{
    count++;
    btnContainer += `<button class=${"tools"+count}>${tool}</button>`;
  });
  return btnContainer;
}

fetchFunc();//====================calling the fetch function here=================



// ------------Adding Element in search bar---------------
const searchElement=document.getElementsByClassName("search-left")[0];

document.addEventListener("click",(event)=>
{
  if(event.target.tagName==="BUTTON" && event.target.className!="remove" && !arr.includes(event.target.innerText))
  {
    const divElement=document.createElement("div");
    const spanElement=document.createElement("span");
    spanElement.innerText=event.target.innerText;
    const btnElement=document.createElement("button");
    btnElement.innerText="x";
    btnElement.className="remove";
    
    divElement.appendChild(spanElement);
    divElement.appendChild(btnElement);
    searchElement.appendChild(divElement);

    arr.push(event.target.innerText);

    // ========Calling it again=========
    // cardContainer.innerHTML="";
    // fetchFunc();
    filterFunc(event);
  }
  else if(event.target.className==="remove")
  {
    event.target.parentNode.remove();
    let elementToBeRemoved=event.target.parentNode.firstChild.innerText;
    let index=arr.indexOf(elementToBeRemoved);
    if(index>-1)
    {
      arr.splice(index,1);
    }
  }
  
})


//====================================== for filtering elements==================

function filterFunc(event)
{
  let filterElement=event.target.innerText;
  
  if(event.target.className=="role")
  {
      let filterClass=document.getElementsByClassName("role");
      for(filterClassElement of filterClass)
      {
          if(filterClassElement.innerText!=filterElement)
          {
            filterClassElement.parentNode.parentNode.classList.add("inactive");
          }
      }
  }
  else if(event.target.className=="level")
  {
      let filterClass=document.getElementsByClassName("level");
      for(filterClassElement of filterClass)
      {
          if(filterClassElement.innerText!=filterElement)
          {
            filterClassElement.parentNode.parentNode.classList.add("inactive");
          }
      }
  }
  else if(event.target.className=="languages1")
  {
      let filterClass=document.getElementsByClassName("languages1");
      for(filterClassElement of filterClass)
      {
          if(filterClassElement.innerText!=filterElement)
          {
            filterClassElement.parentNode.parentNode.classList.add("inactive");
          }
      }
  }
  else if(event.target.className=="languages2")
  {
    let filterClass=document.getElementsByClassName("languages2");
      for(filterClassElement of filterClass)
      {
          if(filterClassElement.innerText!=filterElement)
          {
            filterClassElement.parentNode.parentNode.classList.add("inactive");
          }
      }

  }
  else if(event.target.className=="languages3")
  {
    let filterClass=document.getElementsByClassName("languages3");
    // console.log(filterClass);
      for(filterClassElement of filterClass)
      {
        
          if(filterClassElement.innerText!=filterElement)
          {
            console.log(filterClass.parentNode.parentNode.parentNode);
            filterClassElement.parentNode.parentNode.classList.add("inactive");
          }
      }

  }
  else if(event.target.className=="tools1")
  {
    let filterClass=document.getElementsByClassName("tools1");
      for(filterClassElement of filterClass)
      {
          if(filterClassElement.innerText!=filterElement)
          {
            filterClassElement.parentNode.parentNode.classList.add("inactive");
          }
      }

  }
  else if(event.target.className=="tools2")
  {
    let filterClass=document.getElementsByClassName("tools2");
      for(filterClassElement of filterClass)
      {
          if(filterClassElement.innerText!=filterElement)
          {
            filterClassElement.parentNode.parentNode.classList.add("inactive");
          }
      }

  }
  
  
    
}


















// ==================For clearing search input===========

const clearElement=document.getElementById("clear");

clearElement.addEventListener("click",clearSearchInputFunc);

function clearSearchInputFunc()
{
  searchElement.innerHTML="";
  arr=[];
}
