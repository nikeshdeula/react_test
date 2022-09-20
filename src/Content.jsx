import React from "react";

let img1 = "https://picsum.photos/200/300";
img1 = "https://picsum.photos/201/300";
img1 = "https://picsum.photos/202/300";

function Content() {
  return(
  <>
  <img src={img1} alt="" />
  <img src={img1} alt="" />
  <img src={img1} alt="" />
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum tempora ipsa
      placeat non dolorem praesentium cumque neque molestiae voluptatum
      similique, ratione necessitatibus pariatur delectus quas veniam in modi.
      Voluptatibus quis aut id sed mollitia illum reiciendis. Iste, laudantium
      saepe perspiciatis necessitatibus pariatur illo tempora. Temporibus
      numquam at voluptate praesentium vero.
    </p>
  </>
  );
}


export default Content;