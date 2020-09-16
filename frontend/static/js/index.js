let l = console.log;
const navigateTo = (url) => {
  l("before push", location.href);
  history.pushState(null, null, url);
  router();
  l("after push", location.href);
};

const router = async () => {
  const availableRoutes = [
    { path: "/", view: () => console.log("viewing home") },
    { path: "/description", view: () => console.log("viewing description") },
    { path: "/articles", view: () => console.log("viewing articles") },
  ];
  //   const potentialMatches = availableRoutes.map((route) => {
  //     return {
  //       route,
  //       isMatch: location.pathname === route.path,
  //     };
  //   });
  //   console.log(potentialMatches);

  const currentRoute = availableRoutes.find(
    (route) => route.path === location.pathname
  );
  currentRoute.view();
};
const c = (e) => {
  e.preventDefault;
  console.log("popstate happened");
};

const d = (e) => {
  console.log("hash CHANGED!");
};
window.addEventListener("popstate", c);
window.addEventListener("hashchange", d);
document.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    let data = e.currentTarget.getAttribute("data-link");
    // navigateTo(e.target.href);
    history.pushState({ pid: data }, null, "#" + data);
    console.log(history.state);
  })
);
