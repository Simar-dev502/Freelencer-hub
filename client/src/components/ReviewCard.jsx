import StarRating
from "./StarRating";

function ReviewCard({
review
}){

return(

<div
className="
bg-white
p-4
rounded-xl
shadow
"
>

<h3
className="
font-semibold
"
>
{review.client.name}
</h3>

<StarRating
rating={review.rating}
/>

<p
className="
text-gray-600
mt-2
"
>
{review.comment}
</p>

</div>

);

}

export default ReviewCard;