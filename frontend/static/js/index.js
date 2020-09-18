import description from "./description.js";

let l = console.log;


const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const availableRoutes = [
  //  { path: "/", view: () => console.log("viewing home") },
    { path: "/description", view: description },
  //  { path: "/articles", view: () => console.log("viewing articles") },
  ];

  const currentRoute = availableRoutes.find(
    (route) => route.path === location.pathname
  );
  
  let currentView= new currentRoute.view();
  l(currentView.getHtml())
  document.body.innerHTML= await currentView.getHtml();

};

const makeSpa = () => {
  document.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(e.target.href);
    })
  );
  l("made spa");
};

document.addEventListener("DOMContentLoaded", makeSpa);



//   const potentialMatches = availableRoutes.map((route) => {
//     return {
//       route,
//       isMatch: location.pathname === route.path,
//     };
//   });
//   console.log(potentialMatches);
