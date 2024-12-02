<img
src={blok.afbeelding.filename}
alt={blok.afbeelding.alt}
      className="w-full h-auto rounded-t-md object-cover"
      className="min-w-full h-[240px] rounded-t-md object-cover mx-auto"
/>

{/* Titel */}
@@ -22,12 +22,12 @@ const Eyecatcher = ({ blok }) => (
</h1>

{/* Body */}
    <p className="mt-4 pr-8 text-zwart font-paragraaf leading-relaxed">
    <p className="mt-4 pr-8 text-zwart font-paragraaf leading-relaxed line-clamp-5 sm:line-clamp-none">
{blok.body}
</p>

{/* Auteur, tijd en Call-to-action */}
    <div className="mt-4 flex items-center justify-between text-sm text-zwart">
    <div className="mt-4 flex items-center justify-between text-sm text-zwart hidden sm:flex">
{/* Auteur en tijd */}
<p>
<span className="font-semibold">{blok.auteur}</span> • {blok.tijd}
@@ -41,4 +41,4 @@ const Eyecatcher = ({ blok }) => (
</div>
);

export default Eyecatcher;
export default Eyecatcher;
