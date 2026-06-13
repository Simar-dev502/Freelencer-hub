<div
className="
bg-white
p-8
rounded-xl
shadow-lg
"
>

<img
src={user.profileImage}
alt=""
className="
w-32
h-32
rounded-full
"
/>

<ProfileImageUpload />

<ResumeUpload />
<h1
className="
text-3xl
font-bold
mt-4
"
>
{user.name}
</h1>

<p>
⭐ {user.averageRating}
(
{user.totalReviews}
reviews
)
</p>

{
user.averageRating >= 4.5 &&
(
<div
className="
bg-yellow-400
text-black
px-4
py-2
rounded-full
inline-block
mt-3
font-semibold
"
>
🏆 Top Rated Freelancer
</div>
)
}
<p className="mt-4 text-gray-600">
{user.bio}
</p>

</div>