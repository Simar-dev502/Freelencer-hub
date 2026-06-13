import React from "react";

function StarRating({
rating
}){

return(

<div>

{"★".repeat(
Math.round(rating)
)}

{"☆".repeat(
5-Math.round(rating)
)}

</div>

);

}

export default StarRating;