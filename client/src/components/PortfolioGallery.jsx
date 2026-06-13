function PortfolioGallery({
projects
}){

return(

<div
className="
grid
md:grid-cols-3
gap-6
"
>

{
projects.map(
(project)=>(
<div
key={project._id}
className="
bg-white
rounded-xl
shadow
"
>

<img
src={project.image}
alt=""
className="
w-full
h-52
object-cover
"
/>

<div
className="
p-4
"
>

<h3
className="
font-bold
"
>
{project.title}
</h3>

<p>
{project.description}
</p>

</div>

</div>
)
)
}

</div>

);

}

export default PortfolioGallery;